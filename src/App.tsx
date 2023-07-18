import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import './App.scss';
// import logo from './logo.svg';

const Products = lazy(() => import('./pages/Products/Products'));
const Orders = lazy(() => import('./pages/Orders/Orders'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route index element={<Products />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
