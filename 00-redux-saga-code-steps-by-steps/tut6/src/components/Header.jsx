import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action/cart.action";

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
      <button>Remove to cart 🛒</button>
    </div>
  );
};

export default Header;
