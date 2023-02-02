import React, { useLayoutEffect } from "react";
import Film1 from "../../Assets/film1.png";
import Film2 from "../../Assets/film2.jpg";
import "./Films.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Films = () => {
  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1280px)", () => {
      gsap.from(".films__info--first", {
        xPercent: 100,
        scrollTrigger: {
          trigger: ".films__first",
          pin: true,
          scrub: true,
        },
      });

      gsap.from(".films__info--second", {
        xPercent: 100,
        scrollTrigger: {
          trigger: ".films__second",
          pin: true,
          scrub: true,
        },
      });
    });
  });

  const onLoad = () => {
    ScrollTrigger.refresh();
  };

  return (
    <section className="films">
      <div className="films__first">
        <div className="films__image-container">
          <img
            src={Film1}
            alt="A girl holding two films"
            className="films__image"
            onLoad={onLoad}
          />
        </div>
        <div className="films__info--first">
          <h4 className="films__info-heading">Tiny frame, huge drama.</h4>
          <p className="films__info-description">
            Create dramatic, arthouse-style contrast that kicks with our
            Polaroid Go-sized Black Frame Film.
          </p>
        </div>
      </div>
      <div className="films__spacer"></div>
      <div className="films__second">
        <div className="films__image-container">
          <img
            src={Film2}
            alt="Two films of a guy on a background"
            className="films__image"
            onLoad={onLoad}
          />
        </div>
        <div className="films__info--second">
          <h4 className="films__info-heading">Small film, big energy.</h4>
          <p className="films__info-description">
            Classic Polaroid film, but smaller. Take inspiration everywhere,
            with photos that fit in your pocket.
          </p>
        </div>
      </div>
      <div className="films__spacer"></div>
    </section>
  );
};

export default Films;
