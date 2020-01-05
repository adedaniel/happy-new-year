import React from "react";

export const Confirmed = props => {
  return (
    <img src="./icons/confirmed.png" alt="confirmed" width={props.width} />
  );
};

export const Love = props => {
  return (
    <img
      src="./icons/with-love.png"
      alt="Font Awesome's angle-down icon"
      width={props.width}
    />
  );
};
export const AngleDown = props => {
  return (
    <img
      src="./icons/angle-down-solid.svg"
      alt="Font Awesome's angle-down icon"
      width={props.width}
    />
  );
};
export const ScanVideo = props => {
  return (
    <video autoPlay loop muted playsInline>
      <source src="./icons/scan-video.mp4" type="video/mp4" />
    </video>
  );
};
