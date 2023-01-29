import React, { useEffect, useLayoutEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import "./Landing.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const windowWidth = window.innerWidth;

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.set(".spline", {
        scale: 0.5,
      });
    });

    mm.add("(min-width: 1280px)", () => {
      gsap.to(".spline", {
        xPercent: -35,
        scrollTrigger: {
          trigger: ".landing",
          start: "top 0",
          end: "400px 0",
          scrub: true,
        },
      });
    });

    gsap.to(".landing", {
      backgroundColor: "#049bfb",
      scrollTrigger: {
        trigger: ".landing",
        start: "top start",
        end: `50% start`,
        scrub: true,
        markers: true,
      },
    });
  });

  useEffect(() => {
    if (windowWidth >= 1280) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [windowWidth]);

  return (
    <div className="landing">
      <div className="landing__info">
        <h1 className="landing__title">Polaroid Go</h1>
        <h2 className="landing__text">Instant Cameras</h2>
      </div>
      {isDesktop && (
        <Spline
          className="spline"
          scene="https://prod.spline.design/ruO4eHIG9FJ3UzMG/scene.splinecode"
        />
      )}
    </div>
  );
};

export default Landing;
