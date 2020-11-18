import React from "react";
import "./card.css";

function Card(props) {
  return (

    <div class="row">
      <div class="col s12 m7">
        <div class="card blue-grey">
          <div class="card-image">
            <img src={props.image}></img>
          </div>
          <div class="card-content">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
          </div>
          <div class="card-action">
              <a href={props.github}>Github</a>
              <a href={props.deployed}>{props.isDeployed}</a>
          </div>
        </div>
      </div>
      </div>
      
        
  );
}

export default Card;
