import React from "react";
import "./style.css";

//pass the image into each card so all 12 are rendered
const Card = props => {
 return (
 <div className="card" onClick={props.imageClick}>
   <div className="img-container">
     <img alt={props.image} src={props.image} />
   </div>
 </div>
 );
}
export default Card;