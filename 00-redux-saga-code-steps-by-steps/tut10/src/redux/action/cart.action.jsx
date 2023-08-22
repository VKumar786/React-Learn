import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "../action.constants";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeToCart = () => {
  return {
    type: REMOVE_TO_CART,
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};
