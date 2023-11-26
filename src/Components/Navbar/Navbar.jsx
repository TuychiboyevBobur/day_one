import React from "react";
import "./Navbar.css";
import logo from "../images/Logo.png";
import { MdDateRange } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} className="nav-logo" alt="logo" />
        </Link>
        <div className="date1">
          <MdDateRange style={{ color: "red" }} />
          <p className="date">{`${day}.${month}.${year}`}</p>
        </div>
      </div>
      <ul>
        <li>
          <Link to="/" exact activeClassName="active-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/traning" activeClassName="active-link">
            Traning
          </Link>
        </li>
        <li>
          <Link to="/studio" activeClassName="active-link">
            Studio Classess
          </Link>
        </li>
        <li>
          <Link to="/lifestyle" activeClassName="active-link">
            Lifestyle
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active-link">
            About us
          </Link>
        </li>
        <li>
          <Link to="/account">
            <button className="nav-btn">
              <MdOutlineAccountCircle size={30} style={{ color: "#f4e4e3" }} />
              Account
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
