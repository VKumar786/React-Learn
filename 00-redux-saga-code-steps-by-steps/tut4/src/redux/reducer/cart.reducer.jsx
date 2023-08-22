import { ADD_TO_CART, REMOVE_TO_CART } from "../action.constants";

const intitalState = {
  cardItems: [],
};

export const cartItems = (state = intitalState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {};
    case REMOVE_TO_CART:
      return {};
    default:
      break;
  }
};
