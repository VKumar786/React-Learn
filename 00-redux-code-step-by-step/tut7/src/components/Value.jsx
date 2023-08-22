import React from "react";

const Value = (props) => {
  return (
    <>
      <div>{props?.data?.length} 🛒</div>
      <div>
        {props?.data.reduce((accumulator, currVal) => {
          return accumulator + currVal.price;
        }, 0)}
        💰💵
      </div>
    </>
  );
};

export default Value;
