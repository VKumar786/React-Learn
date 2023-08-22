import { combineReducers } from "redux";
import { cartData } from "./cart.reducer";
import { productList } from "./product.reducer";

export default combineReducers({
  cartData,
  productList,
});
