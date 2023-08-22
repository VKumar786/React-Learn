import { ADD_TO_CART, REMOVE_TO_CART } from "../action.constants";

const intitalState = {
  cardItems: [],
};

export const cartData = (state = intitalState, action) => {
  console.log("Reducer", action);
  // return state
  switch (action.type) {
    case ADD_TO_CART:
      console.log('addToCart Reducer')
      return {
        ...state,
        cardItems: state.cardItems.push(action.state),
      };
    case REMOVE_TO_CART:
      return state;
    default:
      return state;
  }
};
