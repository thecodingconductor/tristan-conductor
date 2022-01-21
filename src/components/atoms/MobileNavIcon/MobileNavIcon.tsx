/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import * as PropTypes from "prop-types";
import React, { useContext } from "react";
import { resetButton } from "../../../lib/utils/mixins";

const propTypesShape = {
  closeMenu: PropTypes.func.isRequired,
  openMenu: PropTypes.func.isRequired,
  isSideNavVisible: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const MobileNavIcon = ({
  closeMenu,
  openMenu,
  isSideNavVisible,
  isOpen,
}: Props) => {
  console.log(closeMenu, openMenu, isSideNavVisible, isOpen);
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
