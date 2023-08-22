import React from "react";

const Home = (props) => {
  console.log("Home", props.data);

  return (
    <div>
      Bug Pet 🐶🐇
      <button
        onClick={() => {
          props.addToCartHandler({
            price: 1000,
            name: "I phone 14",
          });
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Home;
