import { combineReducers } from "@reduxjs/toolkit";
import navReducer from "../features/nav/navSlice";
export default combineReducers({
  nav: navReducer,
});
