import React from "react";

const DegreeCmp = ({ degreetypes }) => {
  const { celsius, fahrenheit } = degreetypes;
  return (
    <div>
      <span>
        <button type="button">
          <img src={celsius} alt="degree btns" width={20} height={20} />
        </button>
      </span>
      <span>
        <button type="button">
          <img src={fahrenheit} alt="degree btns" width={20} height={20} />
        </button>
      </span>
    </div>
  );
};

export default DegreeCmp;
