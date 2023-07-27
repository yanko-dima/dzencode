import { BiTimeFive } from 'react-icons/bi';
import { useDate } from '../../hooks/useDate';

export const DateNow = () => {
  const { dateNow, timeNow } = useDate();

  return (
    <div className="info">
      <div className="info-date">
        <span className="info-date__name">Today</span>
        <div className="info-date__body">
          <span>{dateNow}</span>
          <div className="info-time">
            <BiTimeFive className="info-time__icon" />
            <span className="info-time__text">{timeNow}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
