import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-blue-950 text-white justify-between flex   items-center p-4">
        <span>logo</span>
        <ul className="flex gap-6">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="normalfetch">
            <li>Normal Data Fetch</li>
          </NavLink>
          <NavLink to="tsqfetch">
            <li>TSQ Data Fetch</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Header;
