import React from "react";
import GithubIcon from "assets/icons/GithubIcon";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__text">
          <a
            href="https://thumbs.gfycat.com/AmpleOpenGrizzlybear-mobile.mp4"
            target="_blank"
            rel="noopener noreferrer"
          >
            road to happiness
          </a>
        </div>
        <div className="footer__icon">
          <a
            href="https://github.com/cihandundar/add-to-cart"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
