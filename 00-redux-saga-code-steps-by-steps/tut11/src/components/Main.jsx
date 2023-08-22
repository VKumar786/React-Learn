import React from "react";
import { useSelector } from "react-redux";

const Main = () => {
  const result = useSelector((state) => state.cartData); //? useSelector(state.___Reducer_Function_Name__)
  console.log(result);
  return (
    <>
      {result && (
        <>
          {result.cardItems.length} items 🛒,
          {result.cardItems.reduce((acc, item) => {
            return acc + item.price;
          }, 0)}
          &nbsp; total cost 💵
        </>
      )}
    </>
  );
};

export default Main;
