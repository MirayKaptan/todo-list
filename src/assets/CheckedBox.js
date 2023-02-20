import * as React from "react";

const CheckedBox = (props) => (
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
      stroke="#21A7F9"
      strokeWidth={1.5}
    />
    <path
      d="m8 13.927 3.641 3.716L19 9"
      stroke="#21A7F9"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CheckedBox;
