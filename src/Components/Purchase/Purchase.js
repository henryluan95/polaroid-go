import React, { useLayoutEffect } from "react";
import "./Purchase.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Purchase = () => {
  useLayoutEffect(() => {
    gsap.to(".purchase", {
      backgroundColor: "#ff0000",
      scrollTrigger: {
        trigger: ".purchase",
        start: `top bottom`,
        end: `50% bottom`,
        scrub: true,
        markers: true,
      },
    });
  });

  return <div className="purchase">Purchase</div>;
};

export default Purchase;
