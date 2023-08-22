import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartResult = useSelector((state) => state.cartData);
  return (
    <>
      {cartResult.cardItems.map((item, idx) => {
        return (
          <li
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #222222",
              margin: "0.25rem 0 0.5rem 0",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "2rem",
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
            </div>
          </li>
        );
      })}
    </>
  );
};

export default Cart;
