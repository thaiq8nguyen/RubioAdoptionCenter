import React, { useState } from "react";
import cardImage from "../../assets/images/adorable-animal-cat-1404819.png";
import "./EventCard.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = props => {
  //const [content, setContent] = useState("");

  return (
    <div className="cards">
      <div className="image-container">
        {<img className="card-image" src={cardImage} alt="a cat" />}
      </div>
      <div className="card-caption">
        <a href="" className="like-btn">
          I&apos;ll be there!
        </a>
      </div>
      <div className="card-content">
        <div className="title">
          <h1>{props.content.title}</h1>
        </div>
        <div className="body">
          <div className="about">{props.content.description}</div>
          <div className="when">
            <span className="when-title">When: </span>
            <span className="time">{props.content.when}</span>
          </div>
          <div className="where">
            <span className="where-title">Where: </span>
            <span className="location">{props.content.where}</span>
          </div>
        </div>
      </div>
      <div className="card-actions">
        <span>Read more</span>
        <span>
          <FontAwesomeIcon icon="chevron-circle-right" size="1x" />
        </span>
      </div>
    </div>
  );
};

export default Card;
