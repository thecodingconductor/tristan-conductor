import {
  OPEN_MENU,
  CLOSE_MENU,
  MENU_ACTION,
  SHOW_SIDE_NAV,
  HIDE_SIDE_NAV,
} from "../types";

const menuReducer = (state, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        isOpen: true,
      };
    case CLOSE_MENU:
      return {
        ...state,
        isOpen: false,
      };
    case SHOW_SIDE_NAV:
      return {
        ...state,
        isSideNavVisible: true,
      };
    case HIDE_SIDE_NAV:
      return {
        ...state,
        isSideNavVisible: false,
      };
    default:
      return state;
  }
};

export default menuReducer;
