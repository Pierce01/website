import React from "react";
import info from "../data/info.json";

export default function Footer() {
  return (
    <footer>
      <p>{info.footer}</p>
    </footer>
  );
}