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
    caption: "Average Daily Tds Value",
    yaxis: {
      title: {
        text: "Tds value",
      },
      min: 1100,
      max: 1600,
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
      value: "1501",
    },
    {
      label: "Tue",
      value: "1467",
    },
    {
      label: "Wed",
      value: "1492",
    },
    {
      label: "Thu",
      value: "1521",
    },
    {
      label: "Fri",
      value: "1580",
    },
    {
      label: "sat",
      value: "1455",
    },
    {
      label: "sun",
      value: "1500",
    },
  ],
};

class Tdsline extends React.Component {
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

export default Tdsline;
