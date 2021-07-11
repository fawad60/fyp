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
    caption: "TDS range",
    subcaption: "",
    lowerLimit: "1200",
    upperLimit: "1600",
    numberSuffix: " ",
    chartBottomMargin: "40",
    valueFontSize: "11",
    valueFontBold: "0",
  },
  colorRange: {
    color: [
      {
        minValue: "1200",
        maxValue: "1400",
        label: "low",
        color: "#F2726F",
      },
      {
        minValue: "1400",
        maxValue: "1500",
        label: "normal",
        color: "#017827",
      },
      {
        minValue: "1500",
        maxValue: "1600",
        label: "high",
        color: "#34156e",
      },
    ],
  },
  pointers: {
    pointer: [
      {
        value: "1420",
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
            text: "Recommended Utilization Tds Range ",
            x: "$chartCenterX",
            y: "$chartEndY-12",
          },
        ],
      },
    ],
  },
};

class Tdsbar extends React.Component {
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
export default Tdsbar;
