import * as cheerio from "cheerio";

export async function getContributions() {
  const url = "https://github.com/danielbacsur?tab=contributions";

  const data = await fetch(url, {
    headers: {
      "x-requested-with": "XMLHttpRequest",
    },
  });

  const html = await data.text();
  const $ = cheerio.load(html);
  const $days = $("td.ContributionCalendar-day");

  const a = $days.get().map((day) => {
    const $day = $(day);
    const id = $day.attr("id") as string;
    const label = $(`tool-tip[for="${id}"][data-type="label"]`).text();
    const matches = label.match(/(No|\d+)\scontribution(s)?/);

    return {
      date: new Date($day.attr("data-date") as string),
      commits: matches ? (matches[1] === "No" ? 0 : parseInt(matches[1])) : 0,
    };
  });

  const b = a.sort((x, y) => x.date.getTime() - y.date.getTime());

  return b;
}
