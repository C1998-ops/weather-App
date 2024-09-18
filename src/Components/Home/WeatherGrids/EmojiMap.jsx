import React from "react";
import { iconMap } from "../../../utils/griddata";

const EmojiMap = ({ value }) => {
  return (
    <div className="emoji-container">
      <div className="emoji-body">
        <span className="emoji-icon">
          {value.text}{" "}
          <img
            src={iconMap[value.text]}
            alt={`${value.text}`}
            className="emoji-img"
            hidden={value.icon === "" ? true : false}
          />
        </span>
      </div>
    </div>
  );
};

export default EmojiMap;
