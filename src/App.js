import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Ph from "./components/ph";
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
      { id: "312", tds: "1501", turbidity: "25" },
      { id: "313", tds: "1467", turbidity: "25" },
      { id: "314", tds: "1492", turbidity: "24" },
      { id: "315", tds: "1521", turbidity: "26" },
      { id: "316", tds: "1562", turbidity: "26" },
      { id: "317", tds: "1490", turbidity: "26" },
      { id: "318", tds: "1530", turbidity: "25" },
    ],
    Temperature: [
      { id: "547", temp: "32" },
      { id: "549", temp: "32" },
      { id: "550", temp: "32" },
      { id: "553", temp: "32" },
      { id: "554", temp: "32" },
      { id: "555", temp: "32" },
      { id: "556", temp: "32" },
      { id: "557", temp: "33" },
      { id: "558", temp: "34" },
      { id: "559", temp: "34" },
      { id: "560", temp: "34" },
      { id: "561", temp: "33" },
    ],
  });
  const [dataFetching, setdataFetching] = useState(true);

  /* useEffect(() => {
    const Temp = async () => {
      let SearchAPIURL = "http://172.16.10.59//temp.php";
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
        alert("Error" + error);
      }
    };

    const Sensordata = async () => {
      let SearchAPIURL = "http://172.16.10.59/sensordata.php";

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
        alert("Error" + error);
      }
    };

    Temp();
    Sensordata();

    console.log(Data);
  }, []);
*/
  /* useEffect(() => {
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
  }, []);
*/
  console.table("state is ", Data);
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
            <Route path="/home" component={Home} state={Data} />{" "}
            <Route path="/turbity" component={Turbity} state={Data} />{" "}
            <Route path="/temperature" component={Temperature} state={Data} />{" "}
            <Route path="/ph" component={Ph} state={Data} />{" "}
            <Route exact path="/" component={Home} state={Data}>
              <Redirect to="/home" />
            </Route>
          </Switch>{" "}
        </div>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
