import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class PHavaverageLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "High - 2020",
          data: [8, 7.9, 7.6, 7.5, 7.4, 7.1, 8],
        },
        {
          name: "Low - 2020",
          data: [6, 7, 7.1, 6.5, 7, 6.9, 6.8],
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
          text: "Average High & Low PH of previous months",
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
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          title: {
            text: "Month",
          },
        },
        yaxis: {
          title: {
            text: "PH value",
          },
          min: 0,
          max: 14,
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

export default PHavaverageLine;
