import React from "react";

import Card from "./Cards";
import work from "../data/work.json";

export default function WorkExperience() {
  return (
    <Card data={work} id="workExperience" />
  );
}