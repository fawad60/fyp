import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React, { Component } from "react";
import Widgets from "fusioncharts/fusioncharts.widgets";

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);
// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    theme: "fusion",
    caption: "PH range",
    subcaption: "",
    lowerLimit: "0",
    upperLimit: "14",
    numberSuffix: " ",
    chartBottomMargin: "40",
    valueFontSize: "11",
    valueFontBold: "0",
  },
  colorRange: {
    color: [
      {
        minValue: "0",
        maxValue: "6.9",
        label: "Acidic",
        color: "#F2726F",
      },
      {
        minValue: "7",
        maxValue: "7.9",
        label: "Neutral",
        color: "#017827",
      },
      {
        minValue: "8",
        maxValue: "14",
        label: "Alkaline",
        color: "#34156e",
      },
    ],
  },
  pointers: {
    pointer: [
      {
        value: "7",
      },
    ],
  },

  annotations: {
    origw: "400",
    origh: "190",
    autoscale: "1",
    groups: [
      {
        id: "range",
        items: [
          {
            id: "rangeBg",
            type: "rectangle",
            x: "$chartCenterX-115",
            y: "$chartEndY-20",
            tox: "$chartCenterX +115",
            toy: "$chartEndY-5",
            fillcolor: "#0075c2",
          },
          {
            id: "rangeText",
            type: "Text",
            fontSize: "11",
            fillcolor: "#ffffff",
            text: "Recommended Utilization PH Range : 7-8",
            x: "$chartCenterX",
            y: "$chartEndY-12",
          },
        ],
      },
    ],
  },
};

class Phbar extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="hlineargauge"
        width="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}
export default Phbar;
