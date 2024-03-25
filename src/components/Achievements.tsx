import React from "react";

import Cards from "./Cards";
import achievements from "../data/achievements.json";

export default function Achievements() {
  return (
    <Cards data={achievements} id="achievements" />
  );
}