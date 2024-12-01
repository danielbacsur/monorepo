import React from 'react';

interface Contribution {
  date: Date;
  commits: number;
}

interface ContributionCalendarProps {
  contributions: Contribution[];
  projectStartDate?: Date;
  projectEndDate?: Date;
}

export function ContributionCalendar({ 
  contributions,
  projectStartDate,
  projectEndDate
}: ContributionCalendarProps) {
  const maxCommits = Math.max(...contributions.map(c => c.commits));
  const today = new Date();

  const getColor = (commits: number, date: Date) => {
    if (commits === 0) {
      return 'rgb(22, 27, 34)'; // Dark grayish color for days with no contributions
    }

    // Use a logarithmic scale to handle high peaks
    const logBase = 1.5; // Adjust this value to fine-tune the color distribution
    const logMaxCommits = Math.log(maxCommits) / Math.log(logBase);
    const logCommits = Math.log(commits) / Math.log(logBase);
    const intensity = logCommits / logMaxCommits;

    // Adjust the color range to make low contributions more visible
    const minIntensity = 0.2;
    const adjustedIntensity = minIntensity + (1 - minIntensity) * intensity;

    if (!projectStartDate || !projectEndDate || (date >= projectStartDate && date <= projectEndDate)) {
      return `rgb(${Math.round(adjustedIntensity * 55 + 20)}, ${Math.round(adjustedIntensity * 150 + 25)}, ${Math.round(adjustedIntensity * 70 + 10)})`;
    } else {
      return `rgb(${Math.round(adjustedIntensity * 180 + 20)}, ${Math.round(adjustedIntensity * 180 + 20)}, ${Math.round(adjustedIntensity * 180 + 20)})`;
    }
  };

  const getWeeks = (contributions: Contribution[]) => {
    const weeks: Contribution[][] = [];
    let currentWeek: Contribution[] = [];

    // Find the first Sunday
    let startDate = new Date(contributions[0].date);
    while (startDate.getDay() !== 0) {
      startDate.setDate(startDate.getDate() - 1);
    }

    // Fill in empty days before the first contribution
    while (startDate < contributions[0].date) {
      currentWeek.push({ date: new Date(startDate), commits: 0 });
      startDate.setDate(startDate.getDate() + 1);
    }

    // Process all contributions
    for (const contribution of contributions) {
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      currentWeek.push(contribution);
    }

    // Fill in empty days after the last contribution up to today
    let lastDate = new Date(currentWeek[currentWeek.length - 1].date);
    while (currentWeek.length < 7) {
      lastDate.setDate(lastDate.getDate() + 1);
      currentWeek.push({ date: new Date(lastDate), commits: 0 });
    }

    // Add the last week
    weeks.push(currentWeek);

    // Ensure we have exactly 53 weeks
    while (weeks.length > 53) {
      weeks.pop();
    }
    while (weeks.length < 53) {
      const lastWeek = weeks[weeks.length - 1];
      const newWeek = lastWeek.map(day => ({
        date: new Date(day.date.setDate(day.date.getDate() + 7)),
        commits: 0
      }));
      weeks.push(newWeek);
    }

    return weeks;
  };

  let centeredContributions = contributions;

  if (projectStartDate && projectEndDate) {
    // Find the index of the first and last day of the project
    const startIndex = contributions.findIndex(c => c.date >= projectStartDate);
    const endIndex = contributions.findIndex(c => c.date > projectEndDate) - 1;

    // Calculate the number of weeks to show on each side
    const totalWeeks = 53;
    const projectWeeks = Math.ceil((endIndex - startIndex + 1) / 7);
    const sideWeeks = Math.floor((totalWeeks - projectWeeks) / 2);

    // Slice the contributions to center the project
    centeredContributions = [
      ...Array(sideWeeks * 7).fill({ date: new Date(projectStartDate), commits: 0 }),
      ...contributions.slice(startIndex, endIndex + 1),
      ...Array((totalWeeks - projectWeeks - sideWeeks) * 7).fill({ date: new Date(projectEndDate), commits: 0 })
    ];
  }

  const weeks = getWeeks(centeredContributions);

  return (
    <div className="w-full overflow-hidden">
      <div className="grid grid-cols-[repeat(53,1fr)] gap-[2px]">
        {weeks.slice(0, 53).map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-rows-7 gap-[2px]">
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className="aspect-square rounded-sm"
                style={{ 
                  backgroundColor: day.date <= today ? getColor(day.commits, day.date) : 'transparent'
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
