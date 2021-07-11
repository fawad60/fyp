import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LineChart from "./linechart";
import Mixlinetimechart from "./time-line-serieschart";
import "./temperature.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    "padding-top": "2px",
    textAlign: "center",
    color: theme.palette.text.secondary,
    "z-index": "1",
  },
  paperheading: {
    "border-bottom": "2px solid black",
    "background-color": "green",
    "z-index": "10",
  },
}));

export default function Turbidity(props) {
   const Data = props.location.data;
 // console.log("zTemperature componentstate is ", Data);

  const { Sensordata } = Data ? Data : "";
  const classes = useStyles();
  return (
    <div className="temperature-container">
      <h1 className="project-heading"> Sensor Data </h1>

      <div className="temperature-sub-container">
        <div className={classes.root}>
          <Grid container spacing={6}>
           <Grid justify="center" item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <h2>Turbidity Trend</h2>
                <LineChart
                  value={
                   Sensordata                 }
                />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
