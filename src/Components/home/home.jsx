import React from "react";
import "./home.css";
import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "../images/Carousel1.webp";
import Carousel2 from "../images/Carousel2.webp";
import Carousel3 from "../images/Carousel3.webp";
import Exercise1 from "../images/Exercise-1.png";
import Exercise2 from "../images/Exercise-2.png";
import Exercise3 from "../images/Exercise-3.png";
import Exercise4 from "../images/Exercise-4.png";
import Exercise5 from "../images/Exercise-5.png";
import Vector from "../images/Vector 2.png";
import line from "../images/Line 156 (1).png";
import { AiFillLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { LuClipboard } from "react-icons/lu";
import { FaFaceSmile } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import section3 from "../images/section.png";

export const Home = () => {
  return (
    <div className="home">
      <section className="first">
        <Carousel>
          <Carousel.Item interval={1000}>
            <div className="carousel-text">
              <img src={line} alt="" />
              <div className="carousel-text2">
                <h1>Making Different from other builders</h1>
                <button>Get started</button>
              </div>
            </div>
            <img src={Carousel2} alt="first" className="carousel2" />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <div className="carousel-text">
              <img src={line} alt="" />
              <div className="carousel-text2">
                <h1>Making Different from other builders</h1>
                <button>Get started</button>
              </div>
            </div>
            <img className="carousel1" alt="second" src={Carousel1} />
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-text">
              <img src={line} alt="" />
              <div className="carousel-text2">
                <h1>Making Different from other builders</h1>
                <button>Get started</button>
              </div>
            </div>
            <img src={Carousel3} alt="three" className="carousel3" />
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="Exercise">
        <div className="exercise-text">
          <h1>Popular Exercise</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            laudantium, architecto veniam unde accusantium exercitationem velit
            non iste delectus tenetur.
          </p>
          <img src={Vector} alt="" />
        </div>
        <div className="exercise-img">
          <img src={Exercise1} alt="exercise" />
          <img src={Exercise2} alt="exercise" />
          <img src={Exercise3} alt="exercise" />
          <img src={Exercise4} alt="exercise" />
          <img src={Exercise5} alt="exercise" />
        </div>
      </section>
      <section className="programs">
        <div className="left">
          <b>PROGRAMS</b>
          <h1>
            WE ARE <span>HAPPY</span> TO HELP PEOPLE WHO WANT TO ACHIVE THEIR
            GOALS
          </h1>
          <ul>
            <li>
              <CiCircleCheck size={30} style={{ color: "green" }} />
              Body Improvement
            </li>
            <li>
              <CiCircleCheck size={30} style={{ color: "green" }} />
              Be healtier
            </li>
            <li>
              <CiCircleCheck size={30} style={{ color: "green" }} />
              Get more strength
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="box">
            <div className="like">
              <div className="icon">
                <AiFillLike size={25} />
              </div>
              <h3>Simple Workout</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
                repudiandae ante et justo.
              </p>
            </div>
            <div className="tracking">
              <div className="icon">
                <LuClipboard size={25} />
              </div>
              <h3>Progress Tracking</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
                repudiandae ante et justo.
              </p>
            </div>
          </div>
          <div className="box2">
            <div className="Monitoring">
              <div className="icon">
                <FcLike size={25} />
              </div>
              <h3>Nutrition Monitoring</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
                repudiandae ante et justo.
              </p>
            </div>
            <div className="meal">
              <div className="icon">
                <FaFaceSmile size={25} />
              </div>
              <h3>large Meal</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
                repudiandae ante et justo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="four">
        <img src={section3} alt="image" />
        <div className="Personal-text">
          <h1>Personal training</h1>
          <h3>Gym time optimized</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            officiis culpa deserunt cum aut dolorem, consectetur dolor aperiam
            veniam fuga, nisi tempora saepe nihil amet atque dolores illum ad
            maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odit, aliquam.
          </p>
        </div>
      </section>
    </div>
  );
};
