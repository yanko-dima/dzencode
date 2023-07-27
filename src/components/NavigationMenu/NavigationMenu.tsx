import { BsFillBoxFill } from 'react-icons/bs';
import { FaCartShopping } from 'react-icons/fa6';

export const NavigationMenu = () => {
  return (
    <div className=" col-auto min-vh-100 bg-light p-3" style={{ width: 180 }}>
      <ul className="navbar-list">
        <li className="py-2">
          <a href="/" className="nav-link px-2 vertical-center">
            <BsFillBoxFill className="navbar-link__icon" />
            <span className="ms-1 d-none d-sm-inline navbar-link__text">
              Products
            </span>
          </a>
        </li>
        <li className="py-2">
          <a href="/orders" className="nav-link px-2 vertical-center">
            <FaCartShopping className="navbar-link__icon" />
            <span className="ms-1 d-none d-sm-inline navbar-link__text">
              Orders
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};
