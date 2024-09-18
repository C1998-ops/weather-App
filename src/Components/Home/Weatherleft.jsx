import React, { useState } from "react";
import { ReactComponent as Logo } from "../../svg/Sun_Clouds.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Cloud } from "../../svg/Cloud.svg";
import { ReactComponent as Rain } from "../../svg/Rain.svg";
const Weatherleft = () => {
  const [searchText, setSearchtext] = useState("");
  return (
    <div className="weather_left_container">
      <div className="search-container">
        <span className="s_input_icons">
          <i className="fas fa-search fa-circle f-2x"></i>
        </span>
        <input
          type="text"
          name="search"
          placeholder="search for places"
          value={searchText}
          onChange={(e) => setSearchtext(e.target.value)}
        />
        <span
          className="s_input_icons"
          style={{
            backgroundColor: "lightgrey",
            width: 50,
            padding: 5,
            borderRadius: "50%",
          }}
        >
          <i className="fas fa-window-close fa-circle"></i>
        </span>
      </div>
      <div className="weather_img">
        <Logo className="w_img" />
      </div>
      <div className="weather_data">
        <h2 className="weather-degree">12&deg; c</h2>
        <span className="weather-day">Monday,16:00</span>
      </div>
      <div className="weather_div_next">
        <div className="weather_type">
          <div className="img_wrapper">
            <Cloud />
          </div>
          <p>Mosty Cloudy</p>
        </div>
        <div className="weather_type">
          <div className="img_wrapper">
            <Rain />
          </div>
          <p>Rain-30%</p>
        </div>
      </div>
      <div className="weather_country">
        <div className="select_country">
          <span>Bengaluru</span>
        </div>
      </div>
    </div>
  );
};

export default Weatherleft;
