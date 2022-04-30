import React, { useState } from "react";
import "./Weather.css";
import "./FormattedDate";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
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

          <h1>{weatherData.city}</h1>
          <div className="WeatherInfo">
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
              <div className="col-6">
                <div className="d-flex">
                  <img
                    src={weatherData.icon}
                    alt={weatherData.description}
                    className="float-left"
                  />
                  <div className="float-left">
                    <span className="Temperature">
                      {Math.round(weatherData.temperature)}
                    </span>
                    <span className="Unit">°C</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>Humidity:{weatherData.humidity}</li>
                  <li>Wind:{weatherData.wind} km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "a287ab0dd31b56900bb6a0db0c04ca59";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading..";
  }
}
