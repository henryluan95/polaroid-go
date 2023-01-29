import React from "react";
import "./Video.scss";

const video = () => {
  return (
    <video className="video" playsInline autoPlay muted loop>
      <source
        src="https://cdn.sanity.io/files/66aqnbcn/production/68de80db9c1c0fde1b0ff420ac28eba8e26f58a1.mp4"
        type="video/mp4"
      />
      <img
        src="https://cdn.sanity.io/images/66aqnbcn/production/f978345d0715a56ba66022fbb103740696e745b5-2600x1134.jpg"
        title="Your browser does not support the <video> tag"
        alt="fallback for video"
      />
    </video>
  );
};

export default video;
