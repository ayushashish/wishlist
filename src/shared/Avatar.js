import React from "react";

import "./Avatar.css";

const Avatar = (props) => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: "7.5rem", height: "7.5rem" }}
      />
    </div>
  );
};

export default Avatar;
