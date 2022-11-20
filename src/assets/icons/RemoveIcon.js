import * as React from "react";

const RemoveIcon = (props) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#000">
      <path d="m16.342 15 4.05-4.05a.833.833 0 0 0-1.175-1.175l-4.05 4.008-4.075-4.075a.833.833 0 0 0-1.175 1.175L13.983 15 10 18.933a.834.834 0 1 0 1.175 1.175l3.975-3.975 3.95 3.95a.833.833 0 0 0 1.175-1.175L16.342 15Z" />
      <path d="M15 28.333a13.333 13.333 0 1 1 0-26.666 13.333 13.333 0 0 1 0 26.666Zm0-25a11.667 11.667 0 1 0 0 23.334 11.667 11.667 0 0 0 0-23.334Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default RemoveIcon;
