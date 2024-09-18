import React from "react";
import { iconMap } from "../../../utils/griddata";
const DisplayTime = ({ value }) => {
  return (
    <div className="time-container">
      {value.map((item, index) => (
        <div key={index} className="time-item">
          <span className="icon">
            <img src={iconMap[item.icon]} alt="time_image" srcset="" />
          </span>
          <span className="time">{item.time}</span>
        </div>
      ))}
    </div>
  );
};

export default DisplayTime;
