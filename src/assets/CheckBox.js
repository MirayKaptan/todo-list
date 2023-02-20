import * as React from "react";

const CheckBox = (props) => (
  <svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={1}
      y={1}
      width={24}
      height={24}
      rx={6}
      fill="#fff"
      stroke="#999C9F"
      strokeWidth={1.5}
    />
  </svg>
);

export default CheckBox;
