import { useEffect, useState } from 'react';

export const useDate = () => {
  const [dateState, setDateState] = useState<Date>(new Date());

  const getDoubleNumber = (number: number) => {
    return number >= 10 ? number : `${0}${number}`;
  };

  const getMonth = (date: Date) => {
    return getDoubleNumber(date.getMonth() + 1);
  };

  const getMonthName = (date: Date) => {
    return date.toLocaleString('en-us', { month: 'long' });
  };

  const getFirstFormatDate = (date: Date) => {
    const month = getMonth(date);
    const year = date.getFullYear().toString().slice(-2);
    return `${month} / ${year}`;
  };
  const getSecondFormatDate = (date: Date) => {
    const day = getDoubleNumber(date.getDay());
    const month = getMonth(date);
    const year = date.getFullYear();
    return `${day} / ${month} / ${year}`;
  };

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 60000);
  }, []);

  const dayNow = dateState.getDate();
  const monthName = getMonthName(dateState);
  const yearNow = dateState.getFullYear();
  const hoursNow = getDoubleNumber(dateState.getHours());
  const minutesNiw = getDoubleNumber(dateState.getMinutes());
  const dateNow = `${dayNow} ${monthName} ${yearNow}`;
  const timeNow = `${hoursNow}:${minutesNiw}`;

  return {
    dateNow,
    timeNow,
    getFirstFormatDate,
    getSecondFormatDate,
  };
};
