import { BiTimeFive } from 'react-icons/bi';
import { useDate } from '../../hooks/useDate';

export const DateNow = () => {
  const { date, time } = useDate();

  return (
    <div className="info">
      <div className="info-date">
        <span className="info-date__name">Today</span>
        <div className="info-date__body">
          <span>{date}</span>
          <div className="info-time">
            <BiTimeFive className="info-time__icon" />
            <span className="info-time__text">{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
