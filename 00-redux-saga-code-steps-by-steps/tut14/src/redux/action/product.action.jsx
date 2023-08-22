import * as action from "../action.constants";

export const productList = () => {
  // let data = await fetch("https://dummyjson.com/products");
  // data = await data.json();
  return {
    type: action.PRODUCT_LIST,
    data: [],
  };
};