import { SET_ORDER_FACE } from "./types";

export function setOrderFace(FaceImage) {
  return {
    type: SET_ORDER_FACE,
    payload: FaceImage,
  };
}
