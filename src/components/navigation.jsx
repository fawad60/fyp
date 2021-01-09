import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const navstyle = {
    "background-color": "Black",
    height: "100vh",
    display: "flex",
    "align-items": "center",
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
            <Link style={liststyle} to="/home">
              Home
            </Link>
          </li>

          <li>
            <Link style={liststyle} to="/temperature">
              Temperature
            </Link>
          </li>

          <l>
            <Link style={liststyle} to="/ph">
              PH
            </Link>
          </l>
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
