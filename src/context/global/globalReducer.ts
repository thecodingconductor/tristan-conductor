import {
  OPEN_MENU,
  CLOSE_MENU,
  SHOW_SIDE_NAV,
  HIDE_SIDE_NAV,
  SET_VIDEO,
  SET_PHOTO,
  SUBMIT_FORM,
  OPEN_IMAGE_DETAIL,
  CLOSE_IMAGE_DETAIL,
  SET_CURRENT_PAGE,
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
    case OPEN_IMAGE_DETAIL:
      return {
        ...state,
        gallery: {
          ...state.gallery,
          showImageDetail: true,
          currentImage: action.payload,
        },
      };
    case CLOSE_IMAGE_DETAIL:
      return {
        ...state,
        gallery: {
          ...state.gallery,
          showImageDetail: false,
          currentImage: null,
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
    case SUBMIT_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          isSubmitted: true,
        },
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: {
          ...state.currentPage,
          currentPage: action.payload,
        },
      };
    default:
      return state;
  }
};

export default globalReducer;
