import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Phbar from "./ph-bar";
import Phline from "./Ph-line";
import PHavaverageLine from "./ph-average-line";

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

export default function Ph() {
  const classes = useStyles();
  return (
    <div className="temperature-container">
      <h1 className="project-heading">Ph sensor Data </h1>

      <div className="temperature-sub-container">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={12}>
              <Paper className={classes.paper}>
                <Phbar />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <Paper className={classes.paper}>
                {" "}
                <Phline />{" "}
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Paper className={classes.paper}>
                <h3 className="temperature-heading">Current PH value</h3>
                <h1 className="temperature-value">7 </h1>
              </Paper>
            </Grid>

            <Grid justify="center" item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <PHavaverageLine />
              </Paper>
            </Grid>
          </Grid>
        </div>
        );
      </div>
    </div>
  );
}
