import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tds from "./components/Tds";
import Temperature from "./components/temperature";
import Home from "./components/home";
import { Navigation } from "./components/navigation";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import "./components/temperature.css";
import Turbity from "./components/turbity";

function App() {
  const [Data, setData] = useState({
    Sensordata: [
      { id: "317", tds: "1490", turbidity: "26" },
      { id: "318", tds: "1530", turbidity: "25" },
    ],
    Temperature: [
      { id: "560", temp: "34" },
      { id: "561", temp: "33" },
    ],
  });
  //  const [dataFetching, setdataFetching] = useState(true);
  console.warn = console.error = () => {};
  useEffect(() => {
    const Temp = async () => {
      let SearchAPIURL = "http://192.168.43.141/temp.php";
      try {
        const response = await fetch(SearchAPIURL);
        console.log("temp response is ", response);
        const tempdata = await response.json();
        console.log("temp data isssssss ", tempdata);
        return setData((prevstate) => ({
          ...prevstate,
          Temperature: tempdata,
        }));
      } catch (error) {
        console.log("Error" + error);
      }
    };

    const Sensordata = async () => {
      let SearchAPIURL = "http://192.168.43.141/sensordata.php";

      try {
        const response = await fetch(SearchAPIURL);
        console.log("sensordata response is ", response);
        const Sensordata = await response.json();
        console.log("data is ", Sensordata, "data before state is ", Data);
        return setData((prevstate) => ({
          ...prevstate,
          Sensordata: Sensordata,
        }));
      } catch (error) {
        console.log("Error" + error);
      }
    };

    Temp();
    Sensordata();

    console.log(Data);
  }, []);

  /*useEffect(() => {
    const temp = async () => {
      let SearchAPIURL = "http://localhost/fyp/temp.php";
      try {
        const response = await fetch(SearchAPIURL);
        console.log("temp response is ", response);
        const tempdata = await response.json();
        console.log(
          "temp data isssssss ",
          tempdata,
          "state before temp is ",
          Data
        );
        return setData((prevState) => ({
          ...prevState,
          temperature: tempdata,
        }));
      } catch (error) {
        alert("Error" + error);
      }
    };

    const tds = async () => {
      let SearchAPIURL = "http://localhost/fyp/tds.php";

      try {
        const response = await fetch(SearchAPIURL);
        console.log("tds response is ", response);
        const tdsdata = await response.json();
        console.log("tds is ", tdsdata, "tds before state is ", Data);
        return setData((prevState) => ({
          ...prevState,
          tds: tdsdata,
        }));
      } catch (error) {
        alert("Error" + error);
      }
    };

    temp();
    tds();

    console.log(Data);
  }, []);*/

  console.table(
    "state is ",
    Data,
    "tds is",
    Data.Sensordata[Data.Sensordata.length - 1].tds
  );
  return (
    <div className="App">
      <Router>
        <div className="layout">
          <Navigation data={Data} />
        </div>
        <div className="body">
          <h1 className="project-heading">
            Water quality monitoring and disease prevention{" "}
          </h1>{" "}
          <Switch>
            <Route path="/home" component={Home} />{" "}
            <Route path="/turbity" component={Turbity} state={Data} />{" "}
            <Route path="/temperature" component={Temperature} state={Data} />{" "}
            <Route path="/tds" component={Tds} state={Data} />{" "}
            <Route exact path="/" component={Home}>
              <Redirect to="/home" />
            </Route>
          </Switch>{" "}
        </div>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
