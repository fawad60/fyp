import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
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

export default function Turbidity() {
  const classes = useStyles();
  return (
    <div className="temperature-container">
      <h1 className="project-heading"> Sensor Data </h1>

      <div className="temperature-sub-container">
        <div className={classes.root}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className={classes.paper}>
                <h2 className="headingdiv">Fetching Data.........</h2>
                <h2 className="red"> Please Be patient....</h2>{" "}
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className={classes.paper}>
                {" "}
                <h2 className="headingdiv">Fetching Data.........</h2>
                <h2 className="red"> Please Be patient....</h2>{" "}
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className={classes.paper}>
                {" "}
                <h2 className="headingdiv">Fetching Data.........</h2>
                <h2 className="red"> Please Be patient....</h2>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Paper className={classes.paper}>
                {" "}
                <h2 className="headingdiv">Fetching Data.........</h2>
                <h2 className="red"> Please Be patient....</h2>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Paper className={classes.paper}>
                {" "}
                <h2 className="headingdiv">Fetching Data.........</h2>
                <h2 className="red"> Please Be patient....</h2>
              </Paper>
            </Grid>
          </Grid>
        </div>
        );
      </div>
    </div>
  );
}
