export function formatRelativeDate(date: Date | string) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  if (yearsAgo > 0) {
    return `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    return `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    return `${daysAgo}d ago`;
  } else {
    return "Today";
  }
}

export function formatAbsoluteDate(date: Date | string) {
  const targetDate = new Date(date);

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return fullDate;
}
