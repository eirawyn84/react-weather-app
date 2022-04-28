import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          This project was coded by Era Owen and is{" "}
          <a
            href="https://github.com/eirawyn84/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Opern-Sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
