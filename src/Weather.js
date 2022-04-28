import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City ..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <h1>New York</h1>
      <div className="WeatherInfo">
        <ul>
          <li>Thursday 14:04</li>
          <li>Few Clouds</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy"
            ></img>
            <span className="Temperature">7</span>
            <span className="Unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:45%</li>
              <li>Wind: 9.39 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
