import React from "react";

import "./HeadingComponent.css";

const Heading = (props) => {
  return (
    <div className="user_heading">
      <h1>{props.user.userName}'s Wishlist</h1>
    </div>
  );
};

export default Heading;
