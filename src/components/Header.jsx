import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [signedIn, setSignedIn] = useState(false);

  //! IF SIGNED IN
  if (signedIn) {
    return (
      <header className="navbar absolute top-0 mb-2 bg-base-100 justify-center flex">
        <div className="navbar-start">
          <div className="dropdown relative">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/recycle">Recycle your items</NavLink>
              </li>
              <li>
                <a>Shop with us</a>
              </li>
            </ul>
          </div>
          <NavLink to="/Homepage" className="btn btn-ghost text-xl">
            EcoCycle
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/recycle">Recycle your items</NavLink>
            </li>
            <li>
              <a>Shop with us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/Signup" className="btn">
            Sign-up
          </NavLink>
        </div>
      </header>
    );
  }

  // ! IF NOT SIGNED IN
  else {
    return (
      <header className="navbar absolute top-0 mb-2 bg-base-100 justify-center flex">
        <div className="navbar-start">
          <div className="dropdown relative">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/Login">Recycle your items</NavLink>
              </li>
              <li>
                <a>Shop with us</a>
              </li>
            </ul>
          </div>
          <NavLink to="/Login" className="btn btn-ghost text-xl">
            EcoCycle
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/Login">Recycle your items</NavLink>
            </li>
            <li>
              <NavLink to="/Login">Shop with us</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/Login" className="btn">
            Sign-up
          </NavLink>
        </div>
      </header>
    );
  }
};

export default Header;
