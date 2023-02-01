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
          <img
            src="https://cdn.sanity.io/images/66aqnbcn/production/e820a82d4fdbeb1e26e691984ab80509e1979ee0-2048x2048.png?w=3840&q=75&fit=clip&auto=format"
            alt="go camera"
            className="purchase__image"
          />
          <img
            src="https://cdn.sanity.io/images/66aqnbcn/production/c146e8d7e4ae3402aacdb91856f023587f613036-2048x2048.png?w=3840&q=75&fit=clip&auto=format"
            alt="go camera"
            className="purchase__image purchase__image--hover"
          />
        </a>
        <a
          className="purchase__link"
          href="https://www.polaroid.com/en_us/products/color-go-instant-film"
        >
          <img
            src="https://cdn.sanity.io/images/66aqnbcn/production/4c3d03a6fe191b03f26d1db14cabfe67804a2c8f-2048x2048.png?w=3840&q=75&fit=clip&auto=format"
            alt="color go instant film"
            className="purchase__image"
          />
          <img
            src="https://cdn.sanity.io/images/66aqnbcn/production/a5547509a940c97b3fa681ed20b53c0d360775e9-2048x2048.png?w=3840&q=75&fit=clip&auto=format"
            alt="color go instant film"
            className="purchase__image purchase__image--hover"
          />
        </a>
        <a
          className="purchase__link"
          href="https://www.polaroid.com/en_us/products/polaroid-go-camera-strap"
        >
          <img
            src="https://cdn.sanity.io/images/66aqnbcn/production/35bbc13532a907163b644e09de7bfd09f7aedc56-2048x2048.png?w=3840&q=75&fit=clip&auto=format"
            alt="polaroid go camera strap"
            className="purchase__image"
          />
          <img
            src="https://cdn.sanity.io/images/66aqnbcn/production/ac4c0a39a5bf65d702b169215ff3d1e2d7cd65a3-2048x2048.jpg?w=3840&q=75&fit=clip&auto=format"
            alt="polaroid go camera strap"
            className="purchase__image purchase__image--hover"
          />
        </a>
        <a
          className="purchase__link"
          href="https://www.polaroid.com/en_us/products/polaroid-go-pocket-album"
        >
          <img
            src="https://cdn.sanity.io/images/66aqnbcn/production/91acb01671e1fedd1aa157a902e74c953b631f61-2048x2048.png?w=3840&q=75&fit=clip&auto=format"
            alt="polaroid go pocket album"
            className="purchase__image"
          />
          <img
            src="https://cdn.sanity.io/images/66aqnbcn/production/5ded142e1698bde475803f1c749d0ff924aa2227-2048x2048.jpg?w=3840&q=75&fit=clip&auto=format"
            alt="polaroid go pocket album"
            className="purchase__image purchase__image--hover"
          />
        </a>
        <a
          className="purchase__link"
          href="https://www.polaroid.com/en_us/products/polaroid-go-filters"
        >
          <img
            src="https://cdn.sanity.io/images/66aqnbcn/production/832dcc25d501a36e1240ab9bbb0309990ee13ffd-2048x2048.png?w=3840&q=75&fit=clip&auto=format"
            alt="polaroid go filters"
            className="purchase__image"
          />
          <img
            src="https://cdn.sanity.io/images/66aqnbcn/production/0ab302621ff471417b5ec031c616411c8c3dba01-2048x2048.png?w=3840&q=75&fit=clip&auto=format"
            alt="polaroid go filters"
            className="purchase__image purchase__image--hover"
          />
        </a>
        <a
          className="purchase__link"
          href="https://www.polaroid.com/en_us/products/polaroid-go-camera-case"
        >
          <img
            src="https://cdn.sanity.io/images/66aqnbcn/production/2c0e852e85dbc4ebaf7bb89cb2a79a875e32bffd-2048x2048.png?w=3840&q=75&fit=clip&auto=format"
            alt="polaroid go camera case"
            className="purchase__image"
          />
          <img
            src="https://cdn.sanity.io/images/66aqnbcn/production/6879cbf36e8acad9e4f475ebcb889ac97ef8c590-2048x2048.png?w=3840&q=75&fit=clip&auto=format"
            alt="polaroid go camera case"
            className="purchase__image purchase__image--hover"
          />
        </a>
      </div>
    </div>
  );
};

export default Purchase;
