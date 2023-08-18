import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../services/cartSlice";
import { addToFav } from "../services/productSlice";

const Card = ({ item }) => {
  const { image, title, price } = item;
  const dispatch = useDispatch();
  return (
    <div className="card shadow" style={{ width: "18rem" }}>
      <div className="card-body text-center">
        <div className="">
          <img src={image} height="100px" alt="" />
        </div>
        <h5 className="fw-bold">{title.substring(0, 20)}...</h5>
        <p className="text-black-50 fw-bold">${price}</p>
        <div className="">
          <button onClick={()=>dispatch(addToCart(item))} className="btn btn-primary btn-sm">Add To Cart</button>
          <button
            onClick={() => dispatch(addToFav(item))}
            className="btn btn-danger btn-sm ms-3"
          >
            <AiFillHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
