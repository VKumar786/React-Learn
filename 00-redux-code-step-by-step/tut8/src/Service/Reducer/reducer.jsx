import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";
const intialState = {
  cardData: [],
};

export default function cardItems(state = intialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log('Reducer', action)
      return {
        ...state,
        cardData: [...state.cardData, action.data],
      };
    case REMOVE_TO_CART:
      if (state.cardData.length === 0) return { ...state };
      const newCardData = state.cardData.slice(0, -1);
      return { ...state, cardData: newCardData };
    default:
      return state;
  }
}
