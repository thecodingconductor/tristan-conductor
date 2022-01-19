import React, { useReducer } from "react";

import MenuContext from "./menuContext";
import menuReducer from "./menuReducer";

import { OPEN_MENU, CLOSE_MENU, MENU_ACTION } from "../types";

const MenuState = (props) => {
  const initialState = {
    isOpen: false,
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

  return (
    <MenuContext.Provider
      value={{
        isOpen: state.isOpen,
        openMenu,
        closeMenu,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuState;
