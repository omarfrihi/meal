import { useState } from "react";
import { Outlet, useLocation } from "react-router";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="relative">
      <nav className={`navbar ${location.pathname == "/" ? "absolute" : ""}`}>
        <div className="container">
          <a href="/" className="logo">
            <img
              src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png"
              width={40}
            />
          </a>
          <button className="toggle-button" id="toggle-button">
            ☰
          </button>
          <ul className={`nav-links`} id="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/favoris">Favoris</a>
            </li>
            <li>
              <a href="/popular">Popular</a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
export default Layout;
