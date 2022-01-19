/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import * as PropTypes from "prop-types";
import React, { useEffect, useRef, useState, useContext } from "react";
import { resetButton } from "../../../lib/utils/mixins";
import MenuContext from "../../../context/menu/menuContext";

// const propTypesShape = {
//   onClick: PropTypes.func.isRequired,
// };

// type Props = PropTypes.InferProps<typeof propTypesShape>;

const MobileNavIcon = (props) => {
  const menuContext = useContext(MenuContext);
  const { isOpen, openMenu, closeMenu, isSideNavVisible } = menuContext;

  const menuToggle = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <>
      {isSideNavVisible && (
        <div
          sx={{
            height: "43px",
            width: "88px",
            background: "white",
            position: "fixed",
            zIndex: 100,
            top: "30px",
            left: 0,
          }}
        >
          <button
            sx={{
              ...resetButton,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "100%",
            }}
            onClick={menuToggle}
          >
            <Themed.h1
              sx={{
                color: "black",
                fontSize: "21px",
              }}
            >
              T R - S
            </Themed.h1>
          </button>
        </div>
      )}
    </>
  );
};

export default MobileNavIcon;
