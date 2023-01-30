import React from "react";
import "./Films.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Films = () => {
  return (
    <div className="films">
      <div className="films__first">
        <div className="films__image-container">
          <img
            src="https://cdn.sanity.io/images/66aqnbcn/production/b1e1b6c6d191facd9cafb6fc4a4a68b0650efd26-1560x1040.jpg?w=2048&q=75&fit=clip&auto=format"
            alt="A girl holding two films"
            className="films__image"
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
      <div className="films__second">
        <div className="films__image-container">
          <img
            src="https://cdn.sanity.io/images/66aqnbcn/production/99e036bbb3d6d35838eec66d2b50aaaf0810df30-1560x1040.jpg?w=2048&q=75&fit=clip&auto=format"
            alt="Two films of a guy on a background"
            className="films__image"
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
    </div>
  );
};

export default Films;
