import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  emptyCart,
  removeToCart,
} from "../redux/action/cart.action";
import { productList } from "../redux/action/product.action";

const Header = () => {
  const dispatch = useDispatch();
  const productListData = useSelector((state) => state.productList);

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

      <br />
      <button
        onClick={() => {
          dispatch(emptyCart());
        }}
      >
        Empty Cart 🗑️
      </button>

      <br />
      <button
        onClick={() => {
          dispatch(productList());
        }}
      >
        Product Data
      </button>

      {productListData.map((item, idx) => {
        return <li key={idx}>
          {item.name}, {item.type}, {item.color}, {item.price}
        </li>
      })}
    </div>
  );
};

export default Header;
