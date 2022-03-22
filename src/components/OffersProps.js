import React from "react";

export default function OfferProps(props) {
    return (
      <div className='offers'>
          <div className='offersWrapper'>
              <img src={props.url}></img>
              <h3>{props.name}</h3>
              <p>{props.review}</p>
  
          </div>
          
      </div>
    )
  }