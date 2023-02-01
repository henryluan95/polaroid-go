import React, { useLayoutEffect } from "react";
import "./Info.scss";
import CircleText from "../../Assets/circle-text.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ViewHeight = window.innerHeight;

const Info = () => {
  useLayoutEffect(() => {
    gsap.to(".info", {
      backgroundColor: "#049bfb",
      scrollTrigger: {
        trigger: ".info",
        start: `-${ViewHeight} start`,
        end: `-${ViewHeight / 2} start`,
        scrub: true,
      },
    });
  });

  return (
    <section className="info">
      <div className="info__left">
        <p className="info__text">
          <span>STAY</span> <span>INSTANT</span>
        </p>
        <img
          className="info__circle"
          src={CircleText}
          alt="Wearable, Portable, Create Anywhere"
        />
      </div>
      <div className="info__right">
        <h3 className="info__description info__description--heading">
          Polaroid Go Instant Camera
        </h3>
        <p className="info__description">
          Create big, smaller, with the new Polaroid Go camera. Meet your
          portable, wearable, partner in creativity: one small camera, lots of
          big ideas, and all the features you love from our classic models.
        </p>
        <p className="info__description">
          Only compatible with the Polaroid Go film.
        </p>
      </div>
    </section>
  );
};

export default Info;
