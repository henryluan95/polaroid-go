import Polaroid from "../../Assets/polaroidpurchase.png";
import PolaroidHover from "../../Assets/polaroidhover.png";
import Film from "../../Assets/film.png";
import FilmHover from "../../Assets/filmhover.png";
import Strap from "../../Assets/strap.png";
import StrapHover from "../../Assets/straphover.png";
import Album from "../../Assets/album.png";
import AlbumHover from "../../Assets/albumhover.png";
import Filter from "../../Assets/filter.png";
import FilterHover from "../../Assets/filterhover.png";
import Case from "../../Assets/case.png";
import CaseHover from "../../Assets/casehover.png";
import React, { useLayoutEffect } from "react";
import "./Purchase.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Purchase = () => {
  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1280px)", () => {
      gsap.to(".purchase", {
        backgroundColor: "black",
        scrollTrigger: {
          trigger: ".purchase",
          start: `top bottom`,
          end: `50% bottom`,
          scrub: true,
        },
      });
    });
  });

  return (
    <div className="purchase">
      <div className="purchase__container">
        <a
          className="purchase__link"
          href="https://www.polaroid.com/en_us/products/go-polaroid-camera"
        >
          <img src={Polaroid} alt="go camera" className="purchase__image" />
          <img
            src={PolaroidHover}
            alt="go camera"
            className="purchase__image purchase__image--hover"
          />
        </a>
        <a
          className="purchase__link"
          href="https://www.polaroid.com/en_us/products/color-go-instant-film"
        >
          <img
            src={Film}
            alt="color go instant film"
            className="purchase__image"
          />
          <img
            src={FilmHover}
            alt="color go instant film"
            className="purchase__image purchase__image--hover"
          />
        </a>
        <a
          className="purchase__link"
          href="https://www.polaroid.com/en_us/products/polaroid-go-camera-strap"
        >
          <img
            src={Strap}
            alt="polaroid go camera strap"
            className="purchase__image"
          />
          <img
            src={StrapHover}
            alt="polaroid go camera strap"
            className="purchase__image purchase__image--hover"
          />
        </a>
        <a
          className="purchase__link"
          href="https://www.polaroid.com/en_us/products/polaroid-go-pocket-album"
        >
          <img
            src={Album}
            alt="polaroid go pocket album"
            className="purchase__image"
          />
          <img
            src={AlbumHover}
            alt="polaroid go pocket album"
            className="purchase__image purchase__image--hover"
          />
        </a>
        <a
          className="purchase__link"
          href="https://www.polaroid.com/en_us/products/polaroid-go-filters"
        >
          <img
            src={Filter}
            alt="polaroid go filters"
            className="purchase__image"
          />
          <img
            src={FilterHover}
            alt="polaroid go filters"
            className="purchase__image purchase__image--hover"
          />
        </a>
        <a
          className="purchase__link"
          href="https://www.polaroid.com/en_us/products/polaroid-go-camera-case"
        >
          <img
            src={Case}
            alt="polaroid go camera case"
            className="purchase__image"
          />
          <img
            src={CaseHover}
            alt="polaroid go camera case"
            className="purchase__image purchase__image--hover"
          />
        </a>
      </div>
    </div>
  );
};

export default Purchase;
