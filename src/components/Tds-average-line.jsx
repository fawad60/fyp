import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class TdsavaverageLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "High - 2021",
          data: [1600, 1550, 1450, 1520, 1420, 1510, 1590],
        },
        {
          name: "Low - 2021",
          data: [1300, 1250, 1250, 1210, 1330, 1210, 1390],
        },
      ],
      options: {
        chart: {
          height: 200,
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: true,
          },
        },
        colors: ["#77B6EA", "#545454"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Average High & Low TDS",
          align: "left",
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: ["Mon", "Tue", "wed", "thu", "fri", "sun", "sat"],
          title: {
            text: "week",
          },
        },
        yaxis: {
          title: {
            text: "Tds value",
          },
          min: 1100,
          max: 1600,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
        />
      </div>
    );
  }
}

export default TdsavaverageLine;
