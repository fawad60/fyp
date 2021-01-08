import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from "react";

import Widgets from "fusioncharts/fusioncharts.widgets";

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);
// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Average Daily PH Value",
    yaxis: {
      title: {
        text: "PH value",
      },
      min: 0,
      max: 14,
    },
    subcaption: "",
    numbersuffix: " ",
    rotatelabels: "1",
    setadaptiveymin: "1",
    theme: "fusion",
  },
  data: [
    {
      label: "Mon",
      value: "7.1",
    },
    {
      label: "Tue",
      value: "7.5",
    },
    {
      label: "Wed",
      value: "6",
    },
    {
      label: "Thu",
      value: "7.9",
    },
    {
      label: "Fri",
      value: "7.5",
    },
    {
      label: "sat",
      value: "8.9",
    },
    {
      label: "sun",
      value: "7",
    },
  ],
};

class Phline extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="line"
        width="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default Phline;
