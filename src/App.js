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
