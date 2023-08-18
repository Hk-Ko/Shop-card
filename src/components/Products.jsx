import React, { useEffect } from "react";
import { getData } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../services/productSlice";
import Card from "./Card";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  console.log(products);

  const getProductsData = async () => {
    const data = await getData("/products");
    dispatch(getProducts(data));
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div>
      <div className="d-flex flex-wrap gap-5 justify-content-center align-items-center my-5">
        {products?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
