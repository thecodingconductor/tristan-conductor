import {
  OPEN_MENU,
  CLOSE_MENU,
  SHOW_SIDE_NAV,
  HIDE_SIDE_NAV,
  SET_VIDEO,
  SET_PHOTO,
} from "../types";

const globalReducer = (state, action) => {
  switch (action.type) {
    case SET_PHOTO:
      return {
        ...state,
        gallery: {
          ...state.gallery,
          gridMediaType: "photo",
        },
      };
    case SET_VIDEO:
      return {
        ...state,
        gallery: {
          ...state.gallery,
          gridMediaType: "video",
        },
      };
    case OPEN_MENU:
      return {
        ...state,
        menu: {
          ...state.menu,
          isOpen: true,
        },
      };
    case CLOSE_MENU:
      return {
        ...state,
        menu: {
          ...state.menu,
          isOpen: false,
        },
      };
    case SHOW_SIDE_NAV:
      return {
        ...state,
        menu: {
          ...state.menu,
          isSideNavVisible: true,
        },
      };
    case HIDE_SIDE_NAV:
      return {
        ...state,
        menu: {
          ...state.menu,
          isSideNavVisible: false,
        },
      };
    default:
      return state;
  }
};

export default globalReducer;
