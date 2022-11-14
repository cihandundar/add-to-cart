import React from "react";
import Best from "assets/images/best.png";
import Fast from "assets/images/fast.png";
import Free from "assets/images/free.png";
const Info = () => {
  const about = [
    {
      id: 10,
      title: "Fast Delivery",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam a, expedita porro nostrum dicta molestias.",
      img: [Fast],
    },
    {
      id: 11,
      title: "Free Shiping",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam a, expedita porro nostrum dicta molestias.",
      img: [Free],
    },
    {
      id: 12,
      title: "Best Quality",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam a, expedita porro nostrum dicta molestias.",
      img: [Best],
    },
  ];

  return (
    <div className="about">
      <h2>Why Shop With Us</h2>
      <div className="about__container">
        {about?.map((info) => (
          <div key={info?.id} className="about__content">
            <div className="about__icon">
              <span>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={info?.img}
                  alt=""
                />
              </span>
            </div>
            <div className="about__title">
              <h3>{info?.title}</h3>
            </div>
            <div className="about__text">
              <p>{info?.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
