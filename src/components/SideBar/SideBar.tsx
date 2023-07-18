import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationMenu } from '../NavigationMenu/NavigationMenu';
export const SideBar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto min-vh-100 bg-dark py-3">
          <NavigationMenu />
        </div>
      </div>
    </div>
  );
};
