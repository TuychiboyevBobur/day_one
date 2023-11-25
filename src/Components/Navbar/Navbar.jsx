import React from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import { MdOutlineAccountCircle } from "react-icons/md";

export const Navbar = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <nav>
      <div className="logo">
        <img src={logo} className="nav-logo" alt="logo" />
        <p>{`${day}.${month}.${year}`}</p>
      </div>
      <ul>
        <li>
          <a href="">Traning</a>
        </li>
        <li>
          <a href="">Studio Classess</a>
        </li>
        <li>
          <a href="">Lifestyle</a>
        </li>
        <li>
          <a href="">About us</a>
        </li>
        <li>
          <a href="">
          <button className="nav-btn">
            <MdOutlineAccountCircle size={30} style={{ color: "white" }} />
          </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};
