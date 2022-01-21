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

  const changeMediaType = (label: string) => {
    if (label.toLocaleLowerCase().trim() === state.gridMediaType) {
      return;
    }

    if (state.gridMediaType === "photo") {
      dispatch({
        type: SET_VIDEO,
      });
    } else if (state.gridMediaType === "video") {
      dispatch({
        type: SET_PHOTO,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        gallery: {
          gridMediaType: state.gallery.gridMediaType,
          changeMediaType,
        },
        menu: {
          isOpen: state.menu.isOpen,
          isSideNavVisible: state.menu.isSideNavVisible,
          openMenu,
          closeMenu,
          showSideNav,
          hideSideNav,
        },
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
