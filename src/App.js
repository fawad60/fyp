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
import SensorData from "./components/global state/SensorData";
function App() {
  const [Data, setData] = useState([]);
  const [dataFetching, setdataFetching] = useState(true);

  useEffect(() => {
    const temfun = async () => {
      let SearchAPIURL = "http://localhost/fyp/temp.php";
      try {
        const response = await fetch(SearchAPIURL);
        console.log(response);
        const data = await response.json();
        console.log("app data isssssss ", data);
        return setData({ data });
      } catch (error) {
        alert("Error" + error);
      }
    };
    temfun();

    console.log(Data);
  }, []);

  const tds = async () => {
    let SearchAPIURL = "http://localhost/fyp/Tds.php";

    try {
      const response = await fetch(SearchAPIURL);
      const data = await response.json();
      return setData(data);
    } catch (error) {
      alert("Error" + error);
    }
  };
  console.table("state is ", typeof Data, Data);
  return (
    <div className="App">
      <Router>
        <div className="layout">
          <Navigation data={Data} />
        </div>
        <div className="body">
          <h1 className="project-heading">
            Water quality monitoring and disease prevention
          </h1>
          <Switch>
            <Route path="/home" component={Home} state={Data} />
            <Route path="/turbity" component={Turbity} />
            <Route path="/temperature" component={Temperature} state={Data} />
            <Route path="/ph" component={Ph} />
            <Route path="/signup" component={SignupForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
