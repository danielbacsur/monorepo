import * as cheerio from "cheerio";

async function getYears() {
  const url = "https://github.com/danielbacsur?tab=contributions";

  const data = await fetch(url, {
    headers: {
      "x-requested-with": "XMLHttpRequest",
    },
  });

  const body = await data.text();
  const $ = cheerio.load(body);
  const years = $(".js-year-link.filter-item").get();

  return years.map((year) => {
    const href = $(year).attr("href");
    const githubUrl = new URL(`https://github.com${href}`);
    githubUrl.searchParams.set("tab", "contributions");

    return githubUrl.toString();
  });
}

async function getContributionsForYear(url: string) {
  const data = await fetch(url, {
    headers: {
      "x-requested-with": "XMLHttpRequest",
    },
  });

  const html = await data.text();
  const $ = cheerio.load(html);
  const days = $("td.ContributionCalendar-day").get();

  return days.map((day) => {
    const id = $(day).attr("id") as string;
    const date = $(day).attr("data-date") as string;
    const label = $(`tool-tip[for="${id}"][data-type="label"]`).text();
    const matches = label.match(/(No|\d+)\scontribution(s)?/);

    return {
      date: new Date(date),
      commits: matches ? (matches[1] === "No" ? 0 : parseInt(matches[1])) : 0,
    };
  });
}

export async function getContributions() {
  const years = await getYears();
  const contributions = await Promise.all(years.map(getContributionsForYear));

  return contributions
    .flat()
    .sort((x, y) => x.date.getTime() - y.date.getTime());
}
