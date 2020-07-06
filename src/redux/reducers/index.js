import { combineReducers } from "redux";
import { cart } from "./cartReducer";
import { amiibo } from "./amiiboReducer";

const rootReducer = combineReducers({
  amiibo,
  cart,
});

export default rootReducer;
