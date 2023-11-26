import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import "./footer.css";
import {
  FaFacebook,
  FaTelegram,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div className="box">
        <div className="one">
          <img src={Logo} className="logo" alt="logo" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos, optio.
          </p>
        </div>
        <div className="two">
          <h3>Information</h3>
          <ul>
            <li>
              <Link to="/about">
                <p>Pricing</p>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <p>Fitnes</p>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <p>Lifstyle</p>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <p>About us</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="three">
          <h3>More Links</h3>
          <ul>
            <li>
              <Link to="/Galary">
                <p>Contact</p>
              </Link>
            </li>
            <li>
              <Link to="/Galary">
                <p>Behind the scence</p>
              </Link>
            </li>
            <li>
              <Link to="/Galary">
                <p>ClubLocation</p>
              </Link>
            </li>
            <li>
              <Link to="/Galary">
                <p>Galary</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="four2">
          <h3>Follow Us On!</h3>
          <ul>
            <li className="facebook">
              <Link to="https://facebook.com" target="_blank">
                <FaFacebook style={{ color: "red" }} />
                Facebook
              </Link>
            </li>
            <li className="twitter">
              <Link to="https://twitter.com" target="_blank">
                <FaTwitter style={{ color: "red" }} /> Twitter
              </Link>
            </li>
            <li className="instagram">
              <Link to="https://instagram.com" target="_blank">
                <FaInstagram style={{ color: "red" }} />
                Instagram
              </Link>
            </li>
            <li className="telegram" target="_blank">
              <Link to="https://t.me/tuychiboyev_bobur">
                <FaTelegram style={{ color: "red" }} /> Telegram
              </Link>
            </li>
            <li className="youtube" target="_blank">
              <Link to="https://youtube.com">
                <FaYoutube style={{ color: "red" }} />
                You Tube
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p>
        Copyright ©2023 <img src={Logo} className="logo2" alt="logo" />. All
        Rights Reserved
      </p>
    </footer>
  );
};
