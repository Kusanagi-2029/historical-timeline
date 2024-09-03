/**
 * Обновляет даты с анимацией, изменяя их от начальных значений до новых значений пошагово в 1 год.
 */
export const updateDatesWithAnimation = (
  startDate: string,
  endDate: string,
  newStartDate: string,
  newEndDate: string,
  setStartDate: (date: string) => void,
  setEndDate: (date: string) => void,
) => {
  // Извлекаем год из строки даты
  const parseYear = (date: string) => {
    const year = parseInt(date, 10);
    return isNaN(year) ? 0 : year; // Если не число, возвращаем 0
  };

  let currentStartYear = parseYear(startDate);
  const targetStartYear = parseYear(newStartDate);

  let currentEndYear = parseYear(endDate);
  const targetEndYear = parseYear(newEndDate);

  const updateInterval = 20; // Интервал в миллисекундах между обновлениями

  const intervalId = setInterval(() => {
    if (currentStartYear !== targetStartYear) {
      currentStartYear += currentStartYear < targetStartYear ? 1 : -1;
      setStartDate(currentStartYear.toString());
    }

    if (currentEndYear !== targetEndYear) {
      currentEndYear += currentEndYear < targetEndYear ? 1 : -1;
      setEndDate(currentEndYear.toString());
    }

    if (currentStartYear === targetStartYear && currentEndYear === targetEndYear) {
      clearInterval(intervalId); // Останавливаем таймер, когда достигли целевых дат
    }
  }, updateInterval);
};
