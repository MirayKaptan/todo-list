import * as React from "react";

const DeleteIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 6.3H6.3v11c0 1.7 1.3 3 3 3h5.4c1.7 0 3-1.3 3-3v-11H12ZM10.1 10.1v6.3M13.9 10.1v6.3M5 6.3h14M15.2 6.3l-.7-1.2c-.5-.8-1.4-1.3-2.4-1.3s-1.9.5-2.4 1.3l-.9 1.2"
      stroke="#010A1B"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DeleteIcon;
