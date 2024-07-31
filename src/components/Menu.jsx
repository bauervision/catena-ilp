import React, { useState, useLayoutEffect, useRef } from "react";

import WhiteLogo from "../images/Defense-Intelligence-Agency-Signature.png";
import { SearchBar } from "./SearchBar";
import { MenuItems } from "./MenuItems";

export function Menu() {
  return (
    <div className="d-flex w-100">
      <ul className="">
        <li>
          <a class="active" href="./" target="_self">
            Home
          </a>
        </li>

        <li
          onClick={() =>
            document
              .getElementById("map")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <a href="#contact">Map</a>
        </li>

        <li
          onClick={() =>
            document
              .getElementById("video")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <a href="#news">Video</a>
        </li>
        <li
          onClick={() =>
            document
              .getElementById("summary")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <a href="#news">Summary</a>
        </li>
        <li>
          <a href="#about">Source</a>
        </li>
      </ul>
    </div>
  );
}
