import React, { useEffect } from "react";
import "./Loading.scss";
import polaroid from "../../Assets/polaroid.png";
import gsap, { Power4 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Loading = () => {
  useEffect(() => {
    //Initialize timeline
    const tl = gsap.timeline();

    tl
      //Starting animation after loading
      .from(".loading__period", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: Power4.easeOut,
        repeat: 1,
        repeatDelay: 0.5,
      })
      .to(".loading", {
        yPercent: -100,
        duration: 2,
        ease: Power4.easeOut,
      })
      .set("body", { overflow: "visible" }, "<");

    // setTimeout(tl.set("body", { overflow: "visible" }), 5000);
  });

  return (
    <section className="loading">
      <img className="loading__image" src={polaroid} alt="polaroid" />
      <p className="loading__periods">
        <span className="loading__period">P</span>
        <span className="loading__period">O</span>
        <span className="loading__period">L</span>
        <span className="loading__period">A</span>
        <span className="loading__period">R</span>
        <span className="loading__period">O</span>
        <span className="loading__period">I</span>
        <span className="loading__period">D</span>
      </p>
    </section>
  );
};

export default Loading;
