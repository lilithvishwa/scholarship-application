export const getYearOptions = (startYear = 2000, futureYears = 5) => {
  const currentYear = new Date().getFullYear();

  return Array.from(
    {
      length: currentYear + futureYears - startYear + 1,
    },
    (_, index) => {
      const year = currentYear + futureYears - index;
      return {
        label: String(year),
        value: String(year),
      };
    },
  );
};
