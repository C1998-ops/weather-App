import React from "react";
import Weatherleft from "./Weatherleft";
import WeatherRight from "./WeatherRight";

const Weather = () => {
  return (
    <div className="weather">
      <div className="weather_body">
        <section className="weather_left">
          <Weatherleft />
        </section>
        <WeatherRight />
      </div>
    </div>
  );
};

export default Weather;
