import React from "react";
import { griddata, iconMap } from "../../../utils/griddata";
import DisplayTime from "./DisplayTime";
import EmojiMap from "./EmojiMap";

const WeatherGrids = () => {
  return griddata?.map((data, index) => {
    return (
      <div className="weather_grid_card" key={index}>
        <div className="card_header">
          <p>{data.title}</p>
        </div>
        <div className="card_body">
          {data.image.length > 0 && (
            <img src={iconMap[data.image]} alt="bg_image" />
          )}
          {Array.isArray(data.value) ? (
            <DisplayTime value={data.value} />
          ) : (
            <h2>{data.value}</h2>
          )}
        </div>
        <div className="card_footer">
          <EmojiMap value={data.caption} />
        </div>
      </div>
    );
  });
};

export default WeatherGrids;
