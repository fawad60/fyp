import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class TemperatureLine extends React.Component {
  constructor(props) {
    super(props);

    const Data = this.props.value;
  console.log("Temperature componentstate is ", Data);

  const { Temperature } = Data ? Data : "";


  console.log("qqqqqqq",Temperature,Temperature?.temp?.map((data)=> data.temp) )

  
 this.state = {
      value: this.props.value,
      series: [
        {
          name: "High - 2020",
          data: [33, 29, 33, 36, 32, 32, 33],
        },
        {
          name: "Low - 2020",
          data: [25, 26, 20, 21, 23, 27, 29],
        },
      ],
      options: {
        chart: {
          height: 350,
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
          text: "Average High & Low Temperature of previous months",
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
          categories: ["Mon", "Tue", "Wed", "Thusday", "Fri", "Sat", "Sun"],
          title: {
            text: "Day",
          },
        },
        yaxis: {
          title: {
            text: "Temperature",
          },
          min: 5,
          max: 40,
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

    console.log(this.state.value);
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

export default TemperatureLine;
