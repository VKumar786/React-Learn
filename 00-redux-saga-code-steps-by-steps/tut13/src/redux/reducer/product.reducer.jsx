import * as actionT from "../action.constants";

const intitalState = [];

export const productList = (state = intitalState, action) => {
  // return state
  switch (action.type) {
    case actionT.PRODUCT_LIST:
      return [...action.data];

    case actionT.SET_PRODUCT_LIST:
      return [...state, ...action.data];
    default:
      return state;
  }
};

