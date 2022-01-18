import { OPEN_MENU, CLOSE_MENU } from "../types";

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
    default:
      return state;
  }
};

export default menuReducer;
