import { SET_ORDER_FACE } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case SET_ORDER_FACE:
      console.log("SET_ORDER_FACE : ", action.payload);
      return { ...state, face: action.payload };
    default:
      return state;
  }
}
