import React from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.product);
  console.log(cart);
  return (
    <nav className="d-flex justify-content-between align-items-center">
      <Link to={"/"}>
        <p
          className="text-info text-uppercase fw-bold"
          style={{ fontSize: "25px", textDecoration: "none" }}
        >
          mms-shop
        </p>
      </Link>
      <div className="d-flex">
        <Link to={"/cart"}>
          <button className="btn btn-info btn-sm">
            <RiShoppingCartFill />
            <small className="ms-2 fw-bold">{cart?.length}</small>
          </button>
        </Link>
        <Link to={"/fav"}>
          <button className="btn btn-warning btn-sm ms-3">
            <AiFillHeart />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
