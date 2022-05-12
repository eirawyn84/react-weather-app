import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="Temperature">{Math.round(props.celsius)}</span>
      <span className="Unit">°C</span>
    </div>
  );
}
