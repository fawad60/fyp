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
    caption: "Temperature",
    lowerlimit: "0",
    upperlimit: "100",
    showvalue: "1",
    numbersuffix: " ℃",
    theme: "fusion",
    showtooltip: "0",
  },
  colorrange: {
    color: [
      {
        minvalue: "0",
        maxvalue: "20",
        code: "#2aafc7",
      },
      {
        minvalue: "20",
        maxvalue: "40",
        code: " #5fb154",
      },
      {
        minvalue: "40",
        maxvalue: "65",
        code: " #f04400",
      },
      {
        minvalue: "65",
        maxvalue: "100",
        code: "#c43535",
      },
    ],
  },
  dials: {
    dial: [
      {
        value: 10,
      },
    ],
  },
};
class Temperaturemeter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };

    console.log("val check", this.state.value);
  }
  render() {
    dataSource.dials.dial[0].value = this.state.value;
    console.table(this.state.value);
    return (
      <ReactFusioncharts
        type="angulargauge"
        width="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default Temperaturemeter;
