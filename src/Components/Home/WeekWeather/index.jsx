import React from "react";
import { weatherData, iconMap } from "../../../utils/weekWeather";

const WeekWeatherData = () => {
  return weatherData?.map((data) => {
    return (
      <div key={data.day} className="weather-day">
        <span>{data.day}</span>
        <img src={iconMap[data.svg]} alt={data.day} />
        <span>{data.degree}°C</span>
      </div>
    );
  });
};

export default WeekWeatherData;
