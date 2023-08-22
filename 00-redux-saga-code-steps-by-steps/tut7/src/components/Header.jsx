import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  emptyCart,
  removeToCart,
} from "../redux/action/cart.action";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              name: "Redmi 12",
              type: "Mobile",
              color: "Black 🖤",
              price: 150,
            })
          )
        }
      >
        Add to cart 🛒
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(removeToCart());
        }}
      >
        Remove to cart 🛒
      </button>

      <button
        onClick={() => {
          dispatch(emptyCart());
        }}
      >
        Empty Cart 🗑️
      </button>
    </div>
  );
};

export default Header;
