import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";
const intialState = {
  cardData: [],
};

export default function cardItems(state = intialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log('Reducer', action)
      return {
        ...state,
        cardData: action.data,
      };
    case REMOVE_TO_CART:
      return {
        ...state,
        cardData: action.data,
      };
    default:
      return state;
  }
}
