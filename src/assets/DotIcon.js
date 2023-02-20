import * as React from "react";

const DotIcon = (props) => (
  <svg
    width={20}
    height={4}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm6 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#999C9F"
    />
  </svg>
);

export default DotIcon;
