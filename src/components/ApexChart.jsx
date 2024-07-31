import React, { Component } from "react";
import Chart from "react-apexcharts";

export function ApexChart({ lineData, title, type, width }) {
  const { series, options } = lineData;

  return (
    <div className=" items-center justify-center">
      <h4>{title}</h4>
      <div className="">
        <div className="row">
          <div className=" ">
            <Chart
              options={options}
              series={series}
              type={type}
              width={width}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
