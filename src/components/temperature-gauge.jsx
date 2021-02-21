import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class Temperaturegauge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [Math.floor(Math.random() * 101)],
      options: {
        chart: {
          type: "radialBar",
          offsetY: -20,
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5, // margin is in pixels
              dropShadow: {
                enabled: false,
                top: 2,
                left: 0,
                color: "#999",
                opacity: 1,
                blur: 2,
              },
            },
            dataLabels: {
              name: {
                show: true,
              },
              value: {
                offsetY: -40,
                fontSize: "22px",
                formatter: function (val) {
                  return val + " ℃";
                },
              },
            },
          },
        },
        grid: {
          padding: {
            top: -10,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91],
          },
        },
        labels: ["Temperature"],
      },
    };
  }

  componentDidMount() {
    this.setState({ series: [this.props.value] });
  }
  render() {
    return (
      <div id="chart" className="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
        />
      </div>
    );
  }
}

export default Temperaturegauge;
