import React from "react";
import "./Card.css";

const Card = ({ name, abbr, img }) => {
  return (
    <div className="card" key={abbr}>
      <img src={img} alt={name}  className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        
       
      </div>
    </div>
  );
};

export default Card;
