import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { increment } from "../features/addToCart";
import { add } from "../features/addToCart";

export const ReduxshopProps = (props) => {
  const dispatch = useDispatch();

  const handleAddToCart = (props) => {
    dispatch(add(props));
  };

  return (
    <>
      <div id={props.id} className="shopitem">
        <img src={props.url} />
        <p className="bestseller">{props.bestseller ? "Bestseller" : ""}</p>
        <h2>{props.title}</h2>
        <p className="boldprice">${props.price}</p>
        <button
          onClick={() => {
            handleAddToCart(props);
            dispatch(increment());
          }}
        >
          {" "}
          ADD TO CART{" "}
        </button>
      </div>
    </>
  );
};
