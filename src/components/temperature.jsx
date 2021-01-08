import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Temperaturegauge from "./temperature-gauge";
import Thermometer from "react-thermometer-component";
import TemperatureLine from "./temperature-line chart";
import Temperaturemeter from "./temperature-meter";
import "./temperature.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const value = Math.floor(Math.random() * 101);

export default function Temperature() {
  const classes = useStyles();
  return (
    <div className="temperature-container">
      <h1 className="project-heading">Temperature sensor Data </h1>

      <div className="temperature-sub-container">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className={classes.paper}>
                <Temperaturegauge value={value} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className={classes.paper}>
                <Temperaturemeter value={value} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className={classes.paper}>
                <Thermometer
                  theme="light"
                  value={value}
                  max="100"
                  steps="3"
                  format="°C"
                  size="large"
                  height="300"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paper}>
                <h3 className="temperature-heading">Current Temperature</h3>
                <h1 className="temperature-value">{value} °C</h1>
              </Paper>
            </Grid>

            <Grid justify="center" item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <TemperatureLine />
              </Paper>
            </Grid>
          </Grid>
        </div>
        );
      </div>
    </div>
  );
}
