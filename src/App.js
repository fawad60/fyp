import logo from "./logo.svg";
import SignUp from "./signup.jsx";
import Login from "./login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Ph from "./components/ph";
import Temperature from "./components/temperature";
import { Navigation } from "./components/navigation";
import "./App.css";
import "./components/temperature.css";

function App() {
  return (
    <div className="App">
      <div className="layout">
        <Navigation />
        <div className="body">
          <h1 className="project-heading">
            Water quality monitoring and disease prevention
          </h1>

          <Temperature />
          <Ph />
        </div>
      </div>
    </div>
  );
}

export default App;
