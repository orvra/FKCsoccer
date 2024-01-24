import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-base-100 sticky top-0 z-[100]">
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost md:hidden"
              >
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
                  <Link to="/schedule">Schedule</Link>
                </li>
                <li>
                  <Link>About</Link>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/standings">Standings</Link>
                </li>
              </ul>
            </div>
            <Link
              to="/"
              className="btn btn-ghost text-xl py-1 flex md:-translate-x-2"
            >
              <img src="/images/logo/FKC_v3.png" className="h-full" />
            </Link>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/schedule">Schedule</Link>
              </li>
              <li>
                <details>
                  <summary>About</summary>
                  <ul className="p-2">
                    <li>
                      <Link>Sub menu1</Link>
                    </li>
                    <li>
                      <Link>Sub menu2</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/standings">Standings</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
