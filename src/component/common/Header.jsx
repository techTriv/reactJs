import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="flex flex-row justify-center gap-10">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/reducer">Reducer</Link>
        </li>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Home</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
