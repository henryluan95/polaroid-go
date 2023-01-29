import React from "react";
import Spline from "@splinetool/react-spline";
import "./Landing.scss";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__info">
        <h1 className="landing__title">Polaroid Go</h1>
        <h2 className="landing__text">Instant Cameras</h2>
      </div>
      <Spline
        className="spline"
        scene="https://prod.spline.design/ruO4eHIG9FJ3UzMG/scene.splinecode"
      />
    </div>
  );
};

export default Landing;
