import * as React from "react";

const StarIcon = (props) => (
  <svg
    width={props.width || 30}
    height={props.height || 30}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m15 .734 4.635 9.392L30 11.633l-7.5 7.31 1.77 10.323L15 24.392l-9.27 4.874L7.5 18.943 0 11.633l10.365-1.507L15 .734Z"
      fill="#EFCE4A"
    />
  </svg>
);

export default StarIcon;
