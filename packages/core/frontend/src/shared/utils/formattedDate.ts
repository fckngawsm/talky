export const formattedDate = (date: string | Date) => {
  if (!date) return "";
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString();
};
