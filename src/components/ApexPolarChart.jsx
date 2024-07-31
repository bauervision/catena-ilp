import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ApexPolarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [234, 14, 25],
      labels: ["Gun", "Knife", "Others"],
      options: {
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 1,
              strokeColor: "#e8e8e8",
            },
            spokes: {
              strokeWidth: 1,
              connectorColors: "#e8e8e8",
            },
          },
        },
        dataLabels: {
          enabled: false,
          style: {
            colors: ["#333"],
          },
          offsetX: 30,
        },
        chart: {
          type: "polarArea",
          dataLabels: {
            show: false,
          },
        },
        stroke: {
          colors: ["#fff"],
        },
        fill: {
          opacity: 0.8,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="polarArea"
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ApexPolarChart;
