import React from "react";
import celsius from "../../icons/celsius-icon.jpg";
import fahreneheit from "../../icons/fahreneheit.png";
import DegreeCmp from "./DegreeCmp";
import WeeksWeatherData from "./WeekWeather";
import WeatherGrids from "./WeatherGrids/WeatherGrids";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const WeatherRight = () => {
  return (
    <section className="weather_right">
      {/* header */}
      <div className="weather_right_header">
        <div className="weather_right_body">
          <div className="weather-weeks">
            <span>Today</span>
            <span>Week</span>
          </div>
          <div className="weather-header-icons">
            <div className="weather-deg-types">
              <DegreeCmp
                degreetypes={{ celsius: celsius, fahrenheit: fahreneheit }}
              />
            </div>
            <div className="wuser">
              <i className="fas fa-user fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="weather_data_of_week">
        <WeeksWeatherData />
      </div>
      <h2 style={{ textAlign: "start" }}>Today's highlights</h2>
      <div className="weather_grids">
        <WeatherGrids />
      </div>
    </section>
  );
};

export default WeatherRight;
