import Spam from "./Spam";
import React, { Component } from "react";

const Spamalot = () => {
  const spams = Array.from({ length: 500 });

  return spams.map((_, index) => <Spam key={index} />);
};

export default Spamalot;
