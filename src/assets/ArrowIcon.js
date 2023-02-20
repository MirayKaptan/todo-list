import * as React from "react";

const Arrow = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.312 4.852a1.066 1.066 0 0 1 1.508 0l6.039 6.04a1.066 1.066 0 0 1 0 1.506l-6.04 6.04a1.066 1.066 0 0 1-1.507-1.507l4.22-4.22H5.961a1.066 1.066 0 0 1 0-2.132h10.571l-4.22-4.22a1.066 1.066 0 0 1 0-1.507Z"
      fill="#fff"
    />
  </svg>
);

export default Arrow;
