import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
export const Navigation = ({ data }) => {
  console.log(data);
  const navstyle = {
    "background-color": "Black",
    height: "10vh",
  };
  const linkstyle = {
    "list-style": "none",
    display: "flex",
    "justify-content": "space-around",
    "align-items": "center",
    width: "100%",
  };

  const liststyle = {
    color: "white",
    "text-decoration": "none",
  };

  return (
    <div>
      {" "}
      <nav style={navstyle}>
        <ul style={linkstyle}>
          <li>
            <Link
              style={liststyle}
              to={{
                pathname: "/home",
                data,
              }}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              style={liststyle}
              to={{
                pathname: "/temperature",
                data,
              }}
            >
              Temperature
            </Link>
          </li>

          <li>
            <Link style={liststyle} to="/ph">
              PH
            </Link>
          </li>
          <li>
            <Link style={liststyle} to="/turbity">
              Turbity
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
