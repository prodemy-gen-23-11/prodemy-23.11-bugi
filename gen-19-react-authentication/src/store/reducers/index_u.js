// THIS FILE IS UNUSED SINCE THE USAGE OF REDUX TOOLKIT //

import { combineReducers } from "redux";
import cartReducer from "./cartReducer_u";

export default combineReducers({
    cart: cartReducer
});