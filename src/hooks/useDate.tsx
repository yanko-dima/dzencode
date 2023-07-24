import { useEffect, useState } from 'react';
import { IDate } from '../models/IDate';

export const useDate = () => {
  const [dateState, setDateState] = useState<Date>(new Date());

  const dateData: IDate = {
    day: dateState.getDate(),
    month: dateState.getMonth() + 1,
    year: dateState.getFullYear(),
    hour: dateState.getHours(),
    minutes: dateState.getMinutes(),
    seconds: dateState.getSeconds(),
  };
  const { day, month, year, hour, minutes, seconds } = dateData;

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  const date = `${day}-${month}-${year}`;
  const time = `${hour}:${minutes}:${seconds}`;

  return {
    date,
    time,
  };
};
