import React, { useReducer } from "react";

import MenuContext from "./menuContext";
import menuReducer from "./menuReducer";

import { OPEN_MENU, CLOSE_MENU } from "../types";

const MenuState = (props) => {
  const initialState = {
    isOpen: false,
  };

  const [state, dispatch] = useReducer(menuReducer, initialState);

  const openMenu = () => {
    console.log("this is open menu");
    dispatch({
      type: OPEN_MENU,
    });
  };

  const closeMenu = () => {
    console.log("this is close menu");
    dispatch({
      type: CLOSE_MENU,
    });
  };

  return (
    <MenuContext.Provider
      value={{
        isOpen: state,
        openMenu,
        closeMenu,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuState;
