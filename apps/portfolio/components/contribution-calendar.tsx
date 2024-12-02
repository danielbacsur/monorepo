import React from "react";

interface Contribution {
  date: Date;
  commits: number;
}

interface ContributionCalendarProps {
  contributions: Contribution[];
  start: Date;
  end: Date;
}

export function ContributionCalendar({
  contributions,
  start = new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
  end = new Date(),
}: ContributionCalendarProps) {
  contributions = contributions.filter((c) => {
    return c.date >= start && c.date <= end;
  });

  while (contributions[0]?.date.getDay() !== 0) {
    contributions.unshift({
      date: new Date(contributions[0].date.getTime() - 86400000),
      commits: 0,
    });
  }

  while (contributions[contributions.length - 1]?.date.getDay() !== 6) {
    contributions.push({
      date: new Date(
        contributions[contributions.length - 1].date.getTime() + 86400000
      ),
      commits: 0,
    });
  }

  const totalPaddingDays = 53 * 7 - contributions.length;
  const totalPaddingWeeks = totalPaddingDays / 7;
  const leadingPaddingWeeks = Math.floor(totalPaddingWeeks / 2);
  const trailingPaddingWeeks = totalPaddingWeeks - leadingPaddingWeeks;
  const leadingPaddingDays = leadingPaddingWeeks * 7;
  const trailingPaddingDays = trailingPaddingWeeks * 7;

  const startDate = new Date(contributions.at(0)?.date.getTime() || Date.now());
  const leadingPadding = Array.from({ length: leadingPaddingDays }, (_, i) => ({
    date: new Date(startDate.getTime() - (i + 1) * 86400000),
    commits: 0,
  })).reverse();

  const endDate = new Date(contributions.at(-1)?.date.getTime() || Date.now());
  const trailingPadding = Array.from(
    { length: trailingPaddingDays },
    (_, i) => ({
      date: new Date(endDate.getTime() + (i + 1) * 86400000),
      commits: 0,
    })
  );

  const centeredContributions = [
    ...leadingPadding,
    ...contributions,
    ...trailingPadding,
  ];

  const maxCommits = Math.max(...centeredContributions.map((c) => c.commits));
  const today = new Date();

  const getColor = (contribution: Contribution) => {
    if (contribution.date > today) return "transparent";
    if (contribution.commits === 0) return "rgb(22, 27, 34)";

    const logBase = 1.5;
    const logMaxCommits = Math.log(maxCommits) / Math.log(logBase);
    const logCommits = Math.log(contribution.commits) / Math.log(logBase);
    const intensity = logCommits / logMaxCommits;

    const minIntensity = 0.2;
    const adjustedIntensity = minIntensity + (1 - minIntensity) * intensity;

    const r = Math.round(adjustedIntensity * 55 + 20);
    const g = Math.round(adjustedIntensity * 150 + 25);
    const b = Math.round(adjustedIntensity * 70 + 10);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const weeks = [];
  for (let i = 0; i < centeredContributions.length; i += 7) {
    weeks.push(centeredContributions.slice(i, i + 7));
  }

  return (
    <div className="w-full overflow-hidden">
      <div className="grid grid-cols-[repeat(53,1fr)] gap-[2px]">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-rows-7 gap-[2px]">
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className="aspect-square rounded-sm"
                style={{ backgroundColor: getColor(day) }}
                title={`${day.date.toDateString()} - ${day.commits} commits`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
