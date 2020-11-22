import { combineReducers } from "redux";
import user from "./user_reducer";
import order from "./order_reducer";
const rootReducer = combineReducers({
  user,
  order,
});

export default rootReducer;
