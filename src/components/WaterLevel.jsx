import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import LiquidFillGauge from "react-liquid-gauge";

class WaterLevel extends Component {
  state = {
    value: 50,
  };
  startColor = "#6495ed"; // cornflowerblue
  endColor = "#dc143c"; // crimson

  render() {
    const radius = 160;
    const fillColor = "#6495ed";

    return (
      <div>
        <LiquidFillGauge
          style={{ margin: "0 auto" }}
          width={radius * 1.5}
          height={radius * 1}
          value={this.state.value}
          percent="%"
          textSize={1}
          textOffsetX={0}
          textOffsetY={0}
          textRenderer={(props) => {
            const value = Math.round(props.value);
            const radius = Math.min(props.height / 2, props.width / 2);
            const textPixels = (props.textSize * radius) / 2;
            const valueStyle = {
              fontSize: textPixels,
            };
            const percentStyle = {
              fontSize: textPixels * 0.6,
            };

            return (
              <tspan>
                <tspan className="value" style={valueStyle}>
                  {value}
                </tspan>
                <tspan style={percentStyle}>{props.percent}</tspan>
              </tspan>
            );
          }}
          riseAnimation
          waveAnimation
          waveFrequency={2}
          waveAmplitude={1}
          circleStyle={{
            fill: fillColor,
          }}
          waveStyle={{
            fill: fillColor,
          }}
          textStyle={{
            fill: color("#444").toString(),
            fontFamily: "Arial",
          }}
          waveTextStyle={{
            fill: color("#fff").toString(),
            fontFamily: "Arial",
          }}
          onClick={() => {
            this.setState({ value: Math.random() * 100 });
          }}
        />
        <div
          style={{
            margin: "20px auto",
            width: 120,
          }}
        ></div>
      </div>
    );
  }
}

export default WaterLevel;
