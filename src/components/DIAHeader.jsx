import React, { useState, useLayoutEffect, useRef } from "react";

import WhiteLogo from "../images/Defense-Intelligence-Agency-Signature.png";
import { SearchBar } from "./SearchBar";

export function DIAHeader() {
  const prevScrollPos = useRef(window.pageYOffset);
  const id = useRef(null);

  const [isNavShowing, setIsNavShowing] = useState(true);

  // using layout effect because we are setting state based on
  // the layout (window.pageYOffset) before the repaint.
  useLayoutEffect(() => {
    const handleScroll = () => {
      // If the timeout is setup currently, don't handle scroll event.
      if (id.current !== null) {
        return;
      }

      // Only if no timeout is setup currently, handle scroll
      const currentScrollPos = window.scrollY; // get curent y-position
      const isScrolledDown = prevScrollPos.current < currentScrollPos;

      if (isNavShowing && isScrolledDown) {
        setIsNavShowing(false);
      } else if (!isNavShowing && !isScrolledDown) {
        // prevent needless render before the browser can re-paint (60fps ~ 16.7ms)
        id.current = setTimeout(() => {
          setIsNavShowing(true);
          id.current = null;
        }, 300);
      }
      // if nav is not showing AND scrolled down OR
      // nav is showing AND scrolled up => do nothing (don't trigger render)
      // update prev position to be the current position for next scroll event
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavShowing]);

  // flex flex-col md:flex-row justify-between md:justify_center bg-slate-950 p-5 items-center
  return (
    <div className="w-100">
      <nav className="flex justify-between items-center p-3 navbar ">
        <img src={WhiteLogo} className="" alt="DIA logo" />

        {/* <MenuItems /> */}
        <div className="flex justify-center items-center">
          <SearchBar />
          <div className="">
            <div className=" col collapse text-right" id="collapseExample">
              <div className="text-white">
                Source search functionality disabled due to offline mode.
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
