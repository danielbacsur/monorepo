import * as cheerio from "cheerio";

export default async function Skyline() {
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

  const b = [
    ...a.sort((x, y) => x.date.getTime() - y.date.getTime()),
    ...Array(Math.max(0, 371 - a.length)).fill({
      date: new Date(),
      commits: 0,
    }),
  ];

  const max = Math.max(...b.map((x) => x.commits));

  return (
    <div className="h-dvh grid place-items-center">
      <table>
        <tbody>
          {Array(7)
            .fill(0)
            .map((_, i) => (
              <tr key={i}>
                {Array(53)
                  .fill(0)
                  .map((_, j) => {
                    const { date, commits } = b[i + j * 7];
                    const color = Math.round((commits / max) * 255);
                    return (
                      <td
                        key={date}
                        style={{
                          backgroundColor: `rgb(${color}, ${color}, ${color})`,
                          width: "20px",
                          height: "20px",
                        }}
                      ></td>
                    );
                  })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
