import * as React from "react";

const IncreaseIcon = (props) => (
  <svg
    width={props.width || 20}
    height={props.height || 20}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#000">
      <path d="M12.5 0C5.608 0 0 5.607 0 12.5S5.608 25 12.5 25 25 19.393 25 12.5 19.392 0 12.5 0Zm0 24.038C6.138 24.038.962 18.862.962 12.5S6.138.962 12.5.962 24.038 6.138 24.038 12.5 18.862 24.038 12.5 24.038Z" />
      <path d="M18.51 12.02h-5.53V6.73a.48.48 0 1 0-.96 0v5.29H6.49a.48.48 0 1 0 0 .96h5.53v5.77a.48.48 0 1 0 .96 0v-5.77h5.53a.48.48 0 1 0 0-.96Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h25v25H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default IncreaseIcon;
