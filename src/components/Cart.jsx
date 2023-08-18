import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../services/cartSlice";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const cart = useSelector((state) => state.cart.product);
  const dispatch = useDispatch();

    const [total,setTotal] = useState(0)

    useEffect(()=>{
        setTotal(cart?.reduce((a,c)=>a+c.price,0))
    },[cart])

  return (
    <div className="my-5">
      <div className="row">
        <div className="col-7 ">
          <div className="d-flex flex-column gap-5">
            {cart?.map((item) => (
              <div
                className="card shadow"
                key={item?.id}
                style={{ width: "18rem" }}
              >
                <div className="card-body text-center">
                  <div className="">
                    <img src={item?.image} height="100px" alt="" />
                  </div>
                  <h5 className="fw-bold">{item?.title.substring(0, 20)}...</h5>
                  <p className="text-black-50 fw-bold">${item?.price}</p>
                  <div className="">
                    <button
                      onClick={() => dispatch(removeFromCart(item))}
                      className="btn btn-sm btn-danger"
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-5">
            <div className="">
                <h1>Total</h1>
                <p>${total.toFixed(2)}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
