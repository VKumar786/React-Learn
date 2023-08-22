import React from "react";

const Home = (props) => {
  console.log(props);

  return (
    <div>
      Bug Pet 🐶🐇
      <button
        onClick={() => {
          props.addToCartHandler({
            price: 1000,
            name: "I phone 14",
          });
          console.log(props.cardData);
        }}
      >
        Add to cart
      </button>
      <div>{} 🛒</div>
      <div>{} 💰💵</div>
    </div>
  );
};

export default Home;
