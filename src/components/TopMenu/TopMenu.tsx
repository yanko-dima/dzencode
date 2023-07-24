import { DateNow } from '../DateNow/DateNow';
import { Logo } from '../Logo/Logo';
import { Sessions } from '../Sessions/Sessions';

export const TopMenu = () => {
  return (
    <header className="header">
      <Logo />
      <div className="info">
        <DateNow />
        <Sessions />
      </div>
    </header>
  );
};
