import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About me</h2>
      <p>I am Here</p>
      <img src={image} alt="I made this"></img>
    </div>
  );
}

export default About;
