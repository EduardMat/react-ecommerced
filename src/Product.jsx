import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemsAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt=" " />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>£{price}</p>
      </div>
      <button className="addCartBttn" onClick={() => addToCart(id)}>
        Add to Cart {cartItemsAmount > 0 && <> ({cartItemsAmount})</>}
      </button>
    </div>
  );
};
