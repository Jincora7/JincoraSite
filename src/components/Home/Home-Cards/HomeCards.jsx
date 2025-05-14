import "./HomeCard.css";
import React from 'react';
import cardImage from "../../../assets/website-development.png";

const HomeCards = ({heading,para,bgColor,image}) => {
  return (
    <div className="home-card-wrap" style={{backgroundColor:bgColor}}>
      <div className="home-card-left">
        <div className="home-card-left-content">
          <h3>{heading}</h3>
          <p>
            {para}
          </p>
        </div>
      </div>
      <div className="home-card-right">
        <img src={image} alt="Website development" />
      </div>
    </div>
  );
};

export default HomeCards;
