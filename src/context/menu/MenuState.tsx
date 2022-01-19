import React, { useReducer } from "react";

import MenuContext from "./menuContext";
import menuReducer from "./menuReducer";

import { OPEN_MENU, CLOSE_MENU, SHOW_SIDE_NAV, HIDE_SIDE_NAV } from "../types";

const MenuState = (props) => {
  const initialState = {
    isOpen: false,
    isSideNavVisible: false,
  };

  const [state, dispatch] = useReducer(menuReducer, initialState);

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

  return (
    <MenuContext.Provider
      value={{
        isOpen: state.isOpen,
        isSideNavVisible: state.isSideNavVisible,
        openMenu,
        closeMenu,
        showSideNav,
        hideSideNav,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuState;
