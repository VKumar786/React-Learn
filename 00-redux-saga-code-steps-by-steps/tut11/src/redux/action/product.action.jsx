import { PRODUCT_LIST } from "../action.constants";

export const productList = async () => {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return {
    type: PRODUCT_LIST,
    data,
  };
};
