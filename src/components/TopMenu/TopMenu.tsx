import { DateNow } from '../DateNow/DateNow';
import { Logo } from '../Logo/Logo';

export const TopMenu = () => {
  return (
    <header className="header">
      <Logo />
      <DateNow />
    </header>
  );
};
