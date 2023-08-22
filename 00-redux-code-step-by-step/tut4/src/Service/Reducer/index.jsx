import { combineReducers } from "redux";
import cardItems from "./reducer";
// import user from "./reducer";

export default combineReducers({
    cardItems,
    // users, for more than one reducers
})
