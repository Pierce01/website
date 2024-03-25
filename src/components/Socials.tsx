import React from "react";

import "../css/Socials.css";
import socials from "../data/socials.json";
import { loadImage } from "./Cards";

type SocialType = {
  name: string;
  url: string;
};

export default function Socials() {
  return (
    <div className='logos'>
      {socials.map((social: SocialType) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          >
        <img src={loadImage(`${social.name}.svg`, "svg")} className="App-logo" alt={`${social.name} Icon`} />
        </a>
      ))}
    </div>
    ); 
  }