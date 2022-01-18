/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React, { useState, useContext, useEffect } from "react";
// import MenuContext from "../context/menu/menuContext";

const Footer = () => {
  // const menuContext = useContext(MenuContext);
  // const { isOpen, openMenu, closeMenu } = menuContext;

  return (
    <div
      sx={{
        width: "100%",
        height: ["220px", null, "90px"],
        bg: "rgba(0,0,0,0.26)",
        display: "flex",
        flexDirection: ["column", null, "row"],
        padding: ["0 30px", null, "0 140px"],
        justifyContent: [null, null, "space-between"],
        alignItems: [null, null, "center"],
      }}
    >
      <Themed.p
        sx={{
          marginTop: ["42px", null, 0],
          marginBottom: ["25px", null, 0],
        }}
      >
        e: tristan.raissherman@gmail.com
      </Themed.p>
      <Themed.p
        sx={{
          color: "#FCFDFF69",
          marginBottom: ["25px", null, 0],
        }}
      >
        &copy; 2022 Tristan Rais-Sherman
      </Themed.p>
      <Themed.p
        sx={{
          color: "#FCFDFF69",
          marginBottom: ["25px", null, 0],
        }}
      >
        Website built by Tristan Rais-Sherman
      </Themed.p>
    </div>
  );
};

export default Footer;
