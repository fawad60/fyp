import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Ph from "./components/ph";
import Temperature from "./components/temperature";
import Home from "./components/home";
import SignupForm from "./components/SignUp";
import LoginForm from "./components/login";
import { Navigation } from "./components/navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./components/temperature.css";
import Turbity from "./components/turbity";

function App() {
  const [Data, setData] = useState({});
  const [dataFetching, setdataFetching] = useState(true);

  /*  useEffect(() => {
    const temp = async () => {
      let SearchAPIURL = "http://172.16.11.83/temp.php";
      try {
        const response = await fetch(SearchAPIURL);
        console.log("temp response is ", response);
        const data = await response.json();
        console.log("temp data isssssss ", data);
        return setData([...Data, data]);
      } catch (error) {
        alert("Error" + error);
      }
    };

    const tds = async () => {
      let SearchAPIURL = "http://172.16.11.83/Tds.php";

      try {
        const response = await fetch(SearchAPIURL);
        console.log("tds response is ", response);
        const data = await response.json();
        console.log("tds is ", data, "tds before state is ", Data);
        return setData([...Data, data]);
      } catch (error) {
        alert("Error" + error);
      }
    };

    temp();
    tds();

    console.log(Data);
  }, []);
*/

  useEffect(() => {
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

  console.table("state is ", Data);
  return (
    <div className="App">
      <Router>
        <div className="layout">
          <Navigation data={Data} />{" "}
        </div>{" "}
        <div className="body">
          <h1 className="project-heading">
            Water quality monitoring and disease prevention{" "}
          </h1>{" "}
          <Switch>
            <Route path="/home" component={Home} state={Data} />{" "}
            <Route path="/turbity" component={Turbity} />{" "}
            <Route path="/temperature" component={Temperature} state={Data} />{" "}
            <Route path="/ph" component={Ph} />{" "}
            <Route path="/signup" component={SignupForm} />{" "}
            <Route path="/login" component={LoginForm} />{" "}
            <Route path="/" component={Home} />{" "}
          </Switch>{" "}
        </div>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
