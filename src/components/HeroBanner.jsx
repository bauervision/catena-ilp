import React from "react";
export function HeroBanner() {
  return (
    <div className="hero-banner " role="img">
      <div className=" text-white w-100 ">
        <div className="flex   align-items-middle">
          <div className="row align-items-center">
            <div className="col-8  text-start  ">
              <p className="hero-banner__heading">
                (U) D.C. Crime Increased In All Categories in 2023,
                <br /> Including Significant Increases in Violent Crime
              </p>
            </div>
            <div className="col-4 text-end ">
              <p className="hero-banner__heading">(U) August 8, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
