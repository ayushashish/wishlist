import React from "react";
import Heading from "../components/HeadingComponent";

const User = () => {
  const USER = {
    userName: "Ayush",
    id: 1,
  };
  return <Heading user={USER} />;
};

export default User;
