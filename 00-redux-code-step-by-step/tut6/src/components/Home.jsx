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
          console.log(props.cardData);
        }}
      >
        Add to cart
      </button>
      <div>{props.data.length} 🛒</div>
      <div>
        {props.data.reduce((accumulator, currVal) => {
          return accumulator + currVal.price;
        }, 0)}
        💰💵
      </div>
    </div>
  );
};

export default Home;
