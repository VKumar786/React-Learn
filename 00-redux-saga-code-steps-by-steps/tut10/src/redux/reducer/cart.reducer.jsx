import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "../action.constants";

const intitalState = {
  cardItems: [],
};

export const cartData = (state = intitalState, action) => {
  // return state
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cardItems: [...state.cardItems, action.data],
      };
    case REMOVE_TO_CART:
      if (state.cardItems.length === 0) return state;
      const newCarditems = state.cardItems.slice(0, -1);
      return {
        ...state,
        cardItems: newCarditems,
      };
    case EMPTY_CART:
      return {
        ...state,
        cardItems: [],
      };
    default:
      return state;
  }
};
