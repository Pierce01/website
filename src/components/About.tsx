import React from "react";

import "../css/About.css";
import about from "../data/about.json";
import { loadImage } from "./Cards";

export default function About() {
  return (
    <section className="App-about">
      <div className="photoContainer">
        <img
          src={loadImage(about.image, "img")}
          alt={about.alt}
        />
      </div>
      <div className="textContainer">
        <h3>{about.tagline}</h3>
        <p dangerouslySetInnerHTML={{ __html: about.description }}></p>
      </div>
    </section>
  );
}