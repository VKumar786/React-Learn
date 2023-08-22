import React from "react";
import { useSelector } from "react-redux";

const Main = () => {
  const result = useSelector((state) => state.cartData); //? useSelector(state.___Reducer_Function_Name__)
  console.log(result);
  return (
    <>
      <div style={{
        position: 'absolute',
        top: '0',
        right: '10px'
      }}>
        {result && (
          <>
            {result.cardItems.length} items 🛒,
            {result.cardItems.reduce((acc, item) => {
              return acc + item.price;
            }, 0)}
            &nbsp; total cost 💵
          </>
        )}
      </div>
    </>
  );
};

export default Main;
