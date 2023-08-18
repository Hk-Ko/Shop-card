import React from "react";
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { removeFromFav } from "../services/productSlice";

const FavCard = ({product}) => {
    const {image,title,price} = product
    const dispatch = useDispatch()
  return (
    <div className="card shadow" style={{ width: "18rem" }}>
      <div className="card-body text-center">
        <div className="">
          <img src={image} height="100px" alt="" />
        </div>
        <h5 className="fw-bold">{title.substring(0, 20)}...</h5>
        <p className="text-black-50 fw-bold">${price}</p>
        <div className="">
            <button onClick={()=>dispatch(removeFromFav(product))} className="btn btn-sm btn-danger">
                <AiFillDelete/>
            </button>
        </div>
      </div>
    </div>
  );
};

export default FavCard;
