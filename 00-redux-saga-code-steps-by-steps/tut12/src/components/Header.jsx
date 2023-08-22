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
        return (
          <li
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              border: '1px solid #222222',
              margin: '0.25rem 0 0.5rem 0'
            }}
          >
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
              }}
            >
              <span>Title: {item.title}</span>
              <span>Brand: {item.brand}</span>
              <span>Rating: {item.rating}</span>
              <span>Price: ${item.price}</span>
            </div>
            <img
              src={item.thumbnail}
              style={{
                width: "60px",
                height: "60px",
              }}
            />
          </li>
        );
      })}
    </div>
  );
};

export default Header;
/*

brand: "Apple"
​​​
category: "smartphones"
​​​
description: "An apple mobile which is nothing like apple"
​​​
discountPercentage: 12.96
​​​
id: 1
​​​
images: Array(5) [ "https://i.dummyjson.com/data/products/1/1.jpg", "https://i.dummyjson.com/data/products/1/2.jpg", "https://i.dummyjson.com/data/products/1/3.jpg", … ]
​​​
price: 549
​​​
rating: 4.69
​​​
stock: 94
​​​
thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
​​​
title: "iPhone 9"
 */
