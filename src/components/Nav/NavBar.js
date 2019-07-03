import React from "react";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.css";

function NavBar() {
  return (
    <div className="NavBar">
      <h1>Nav</h1>
      <ul className="navigation">
        <li>
          <a href="#">
            <i className="fa fa-dashboard fa-fw" />
            Homepage
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-plus fa-fw" />
            Add a Page
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
