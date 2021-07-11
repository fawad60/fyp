import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tdsbar from "./tds-bar";
import Tdsline from "./Tds-line";
import TdsavaverageLine from "./Tds-average-line";

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

export default function Tds(props) {
  const classes = useStyles();
  return (
    <div className="temperature-container">
      <h1 className="project-heading">TDS sensor Data </h1>

      <div className="temperature-sub-container">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={12}>
              <Paper className={classes.paper}>
                <Tdsbar />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <Paper className={classes.paper}>
                {" "}
                <Tdsline />{" "}
              </Paper>
            </Grid>

            <Grid justify="center" item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <TdsavaverageLine />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
