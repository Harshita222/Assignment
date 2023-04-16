import "./HeroImgStyle.css";
import React from "react";
import { Link } from "react-router-dom";
import IntroImg from "../assets/intro.bg.jpeg.jpg";
// import
const HeroImg = () => {
  return (
    // <div className="hero">
    <div className="content">
      <div className="developer-container">
        <h1 className="heading-1">
          Switch to a remote
          <span className="highlighter"> high-paying </span>
          <br className="sm:block hidden" />
          tech career with Absolute Dimension
        </h1>
        <div className="subtext">
          <p>
            We help developers switch to global, remote,and high-paying careers.
            <br className="sm:block hidden" />
            Find out how Absolute Dimension helps you
          </p>
        </div>

        {/* <a href="#homepage-program" className="cta hero-cta w-inline-block"></a> */}
        <div className="cta-text">Learn More</div>
        <div className="cta-icon rotate w-embed">
          <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
