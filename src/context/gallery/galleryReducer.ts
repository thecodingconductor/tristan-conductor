import { SET_VIDEO, SET_PHOTO } from "../types";

const galleryReducer = (state, action) => {
  switch (action.type) {
    case SET_PHOTO:
      return {
        ...state,
        gridMediaType: "photo",
      };
    case SET_VIDEO:
      return {
        ...state,
        gridMediaType: "video",
      };
    default:
      return state;
  }
};

export default galleryReducer;
