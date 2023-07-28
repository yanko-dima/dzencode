import { BsFillBoxFill } from 'react-icons/bs';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export const NavigationMenu = () => {
  return (
    <div className=" col-auto min-vh-100 bg-light p-3" style={{ width: 180 }}>
      <ul className="navbar-list">
        <li className="py-2">
          <Link to={'/'} className="nav-link px-2 vertical-center">
            <BsFillBoxFill className="navbar-link__icon" />
            <span className="ms-1 d-none d-sm-inline navbar-link__text">
              Products
            </span>
          </Link>
        </li>
        <li className="py-2">
          <Link to={'/orders'} className="nav-link px-2 vertical-center">
            <FaCartShopping className="navbar-link__icon" />
            <span className="ms-1 d-none d-sm-inline navbar-link__text">
              Orders
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
