import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Temperaturegauge from "./temperature-gauge";
import Thermometer from "react-thermometer-component";
import TemperatureLine from "./temperature-line chart";
import Temperaturemeter from "./temperature-meter";
import LineChart from "./linechart";
import "./temperature.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%",
  },
}));

const value = Math.floor(Math.random() * 101);

export default function Temperature(props) {
  console.log(props.location.data, " temperature data ");

  const Data = props.location.data;
  // console.log("zTemperature componentstate is ", Data);

  const { Temperature } = Data ? Data : "";
  console.log("Temperatur after destructure", Temperature);
  /* console.log("in temp compo ",Temperature ,  Temperature
                      ? Temperature[Temperature.length - 1]?.temp
                      : 28);
*/
  const classes = useStyles();
  return (
    <div className="temperature-container">
      <h1 className="project-heading">Temperature sensor Data </h1>

      <div className="temperature-sub-container">
        <div className={classes.root}>
          <Grid container spacing={3}>
            {/*    <Grid item xs={12} sm={6} md={4}>
              <Paper component="div" className={classes.paper}>
                <h5 className="margin-bottom-medium">Temperature</h5>
                <Temperaturegauge value={value} />
              </Paper>
            </Grid>
            */}
            <Grid item xs={12} sm={6} md={4}>
              <Paper className={classes.paper}>
                <Temperaturemeter
                  value={
                    Temperature ? Temperature[Temperature.length - 1]?.temp : 28
                  }
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className={classes.paper}>
                <h5 className="margin-bottom-small">Temperature</h5>

                <Thermometer
                  theme="light"
                  value={
                    Temperature ? Temperature[Temperature.length - 1]?.temp : 28
                  }
                  max="100"
                  steps="3"
                  format="°C"
                  size="large"
                  height="300"
                />
              </Paper>
            </Grid>

            <Grid justify="center" item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <h2>Temperature Trend</h2>
                <TemperatureLine value={Temperature} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
