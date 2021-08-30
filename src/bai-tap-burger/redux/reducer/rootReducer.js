import { combineReducers } from "redux";
import { burgerReducer } from "./burgerReducer";

export const rootReducer = combineReducers({
  // lưu trữ các child reducer
  burgerReducer,
});
