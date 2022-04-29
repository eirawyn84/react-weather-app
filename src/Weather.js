import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <div className="Weather mt-3">
        <form className="m-1">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City ..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>New York</h1>
        <div className="WeatherInfo">
          <ul>
            <li>Thursday 14:04</li>
            <li>Few Clouds</li>
          </ul>
          <div className="row mt-3">
            <div className="col-6">
              <div className="d-flex">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                  alt="cloudy"
                  className="float-left"
                />
                <div className="float-left">
                  <span className="Temperature">7</span>
                  <span className="Unit">°C</span>
                </div>
              </div>
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
    </div>
  );
}
