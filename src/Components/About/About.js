import React, { useLayoutEffect, useRef } from "react";
import gsap, { Power4 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./About.scss";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const fourthText = useRef(null);

  useLayoutEffect(() => {
    const firstTextEl = firstText.current;
    const secondTextEl = secondText.current;
    const thirdTextEl = thirdText.current;
    const fourthTextEl = fourthText.current;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about",
          start: "20% 80%",
          end: "40% 20%%",
          scrub: true,
        },
      })
      .from(firstTextEl.firstChild, {
        yPercent: 100,
        ease: Power4.easeOut,
      })
      .from(secondTextEl.firstChild, {
        yPercent: 100,
        ease: Power4.easeOut,
      })
      .from(thirdTextEl.firstChild, {
        yPercent: 100,
        ease: Power4.easeOut,
      })
      .from(fourthTextEl.firstChild, {
        yPercent: 100,
        ease: Power4.easeOut,
      });

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1280px)", () => {
      gsap.to(".about", {
        backgroundColor: "black",
        scrollTrigger: {
          trigger: ".about",
          start: `bottom bottom`,
          end: `150% bottom`,
          scrub: true,
        },
      });
    });
  });

  return (
    <section className="about">
      <h4 className="about__text">
        <p className="about__text--first" ref={firstText}>
          <span>Smallest</span>
        </p>
        <p className="about__text--second" ref={secondText}>
          <span>Rechargeable</span>
        </p>
        <p className="about__text--third" ref={thirdText}>
          <span>Selfie-ready</span>
        </p>
        <p className="about__text--fourth" ref={fourthText}>
          <span>Warranty Coverage</span>
        </p>
      </h4>
    </section>
  );
};

export default About;
