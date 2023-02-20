import * as React from "react";

const CloseButton = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.793 6.004 6.008 17.789M17.794 17.797 6 6"
      stroke="#010A1B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloseButton;
