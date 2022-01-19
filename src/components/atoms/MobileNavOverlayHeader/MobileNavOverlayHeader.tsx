/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React, { useContext } from "react";
import { resetButton } from "../../../lib/utils/mixins";
import MenuContext from "../../../context/menu/menuContext";

const MobileNavOverlayHeader = () => {
  const menuContext = useContext(MenuContext);
  const { isOpen, closeMenu, openMenu } = menuContext;

  return (
    <button
      sx={{
        ...resetButton,
        height: "47px",
        width: "227px",
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px",
        marginBottom: "30px",
      }}
      onClick={() => closeMenu()}
    >
      <Themed.h1
        sx={{
          color: "black",
          fontSize: "21px",
          fontWeight: 800,
        }}
      >
        Tristan Rais-Sherman
      </Themed.h1>
    </button>
  );
};

export default MobileNavOverlayHeader;
