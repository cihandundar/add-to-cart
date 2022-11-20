import * as React from "react";

const RemoveIcon = (props) => (
  <svg
    width={props.width || 25}
    height={props.height || 25}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m8.881 8.04 12.234 12.143M8.927 20.228 21.07 7.995"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
    />
  </svg>
);

export default RemoveIcon;
