import React, { useReducer } from "react";
import GlobalContext from "./globalContext";
import globalReducer from "./globalReducer";

import {
  OPEN_MENU,
  CLOSE_MENU,
  SHOW_SIDE_NAV,
  HIDE_SIDE_NAV,
  SET_PHOTO,
  SET_VIDEO,
  SUBMIT_FORM,
} from "../types";

const GlobalState = (props) => {
  const initialState = {
    gallery: {
      gridMediaType: "photo",
    },
    menu: {
      isOpen: false,
      isSideNavVisible: false,
    },
    form: {
      isSubmitted: false,
    },
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);
  const openMenu = () => {
    dispatch({
      type: OPEN_MENU,
    });
  };

  const closeMenu = () => {
    dispatch({
      type: CLOSE_MENU,
    });
  };

  const showSideNav = () => {
    dispatch({
      type: SHOW_SIDE_NAV,
    });
  };

  const hideSideNav = () => {
    dispatch({
      type: HIDE_SIDE_NAV,
    });
  };

  const setPhoto = () => {
    dispatch({
      type: SET_PHOTO,
    });
  };

  const setVideo = () => {
    dispatch({
      type: SET_VIDEO,
    });
  };

  const onSubmit = () => {
    console.log("form submitted");
  };

  return (
    <GlobalContext.Provider
      value={{
        gallery: {
          gridMediaType: state.gallery.gridMediaType,
          setPhoto,
          setVideo,
        },
        menu: {
          isOpen: state.menu.isOpen,
          isSideNavVisible: state.menu.isSideNavVisible,
          openMenu,
          closeMenu,
          showSideNav,
          hideSideNav,
        },
        form: {
          isSubmitted: state.form.isSubmitted,
          onSubmit,
        },
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
