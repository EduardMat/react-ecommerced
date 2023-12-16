import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { Products } from "./Item.js";
import { CartItem } from "./Cart-Item";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Item</h1>
      </div>

      <div className="cartItems">
        // eslint-disable-next-line
        {Products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: £{totalAmount}</p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout("/");
              navigate("/checkout");
            }}
          >
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your cart is empty</h1>
      )}
    </div>
  );
};
