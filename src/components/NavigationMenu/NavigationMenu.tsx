import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillBoxFill } from 'react-icons/bs';
import { FaCartShopping } from 'react-icons/fa6';

export const NavigationMenu = () => {
  return (
    <>
      <ul>
        <li className="py-2">
          <a href="/" className="nav-link px-2 vertical-center">
            <BsFillBoxFill className="navbar__link-icon" />{' '}
            <span className="ms-1 d-none d-sm-inline navbar__link-text">
              Products
            </span>
          </a>
        </li>
        <li className="py-2">
          <a href="/orders" className="nav-link px-2 vertical-center">
            <FaCartShopping className="navbar__link-icon" />{' '}
            <span className="ms-1 d-none d-sm-inline navbar__link-text">
              Orders
            </span>
          </a>
        </li>
      </ul>
    </>
  );
};
