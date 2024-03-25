import React from "react";

import "../css/Projects.css";

import Cards from "./Cards";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <Cards data={projects} id="projects" />
  );
}