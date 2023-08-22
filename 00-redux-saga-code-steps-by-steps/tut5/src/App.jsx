import React from "react";
import { addToCart } from "./redux/action/cart.action";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              name: "Redmi 12",
              type: 'Mobile',
              color: 'Black 🖤',
              price: 15000,
            })
          )
        }
      >
        Add to cart 🛒
      </button>
      <br />
      <button>Remove to cart 🛒</button>
    </>
  );
};

export default App;
