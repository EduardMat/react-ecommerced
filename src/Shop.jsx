import React from "react";
import { Products } from "./Item.js";
import { Product } from "./Product.jsx";
import "./Shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1> Gabi s Shop </h1>
      </div>

      <div className="products">
        {"  "}
        {Products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
