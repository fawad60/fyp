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
  const SearchRecord = () => {
    var SearchAPIURL = "http://localhost/fyp/temp.php";
    var headers = {
      Accept: "application/json",
      "Content-Type": "application.json",
    };

    var Data = {};

    fetch(SearchAPIURL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // this.setState({ temp: response[0].Temperature });
      })
      .catch((error) => {
        alert("Error" + error);
      });
  };

  console.log(SearchRecord());

  return (
    <div className="App">
      <Router>
        <div className="layout">
          <Navigation />
        </div>
        <div className="body">
          <h1 className="project-heading">
            Water quality monitoring and disease prevention
          </h1>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/turbity" component={Turbity} />
            <Route path="/temperature" component={Temperature} />
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
