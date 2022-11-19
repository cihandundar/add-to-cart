import * as React from "react";

const Descrease = (props) => (
  <svg
    width={props.width || 20}
    height={props.height || 20}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#000">
      <path d="M12.5 0C5.608 0 0 5.608 0 12.5S5.608 25 12.5 25 25 19.392 25 12.5 19.392 0 12.5 0Zm0 23.958c-6.318 0-11.458-5.14-11.458-11.458 0-6.318 5.14-11.458 11.458-11.458 6.318 0 11.458 5.14 11.458 11.458 0 6.318-5.14 11.458-11.458 11.458Z" />
      <path d="M19.738 12.014H4.634v1.042h15.104v-1.042Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h25v25H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Descrease;
