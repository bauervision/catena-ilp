import React from "react";
import Chart from "react-apexcharts";

export function ApexBarChart({ lineData, title, width, subtitle }) {
  const { series, options } = lineData;

  return (
    <div className="card">
      <p className="p-2">
        <strong>{title}</strong>: <br />
        {subtitle}
      </p>

      <div>
        <Chart options={options} series={series} type="bar" />
      </div>
    </div>
  );
}
