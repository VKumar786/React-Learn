import * as action from "../action.constants";

export const productList = () => {
  // let data = await fetch("https://dummyjson.com/products");
  // data = await data.json();
  return {
    type: action.PRODUCT_LIST,
    data: [],
  };
};

export const searchProduct = (query) => {
  return {
    type: action.SEARCH_PRODUCT_LIST,
    data: query
  }
}