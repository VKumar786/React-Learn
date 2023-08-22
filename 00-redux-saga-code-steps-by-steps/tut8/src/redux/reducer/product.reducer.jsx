import { PRODUCT_LIST } from "../action.constants";

const intitalState = [];

export const productList = (state = intitalState, action) => {
  // return state
  switch (action.type) {
    case PRODUCT_LIST:
      return [...action.data];
    default:
      return state;
  }
};
