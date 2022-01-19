/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React, { useRef, useState, useEffect, useContext } from "react";
import useBreakpoints from "../../../lib/hooks/useBreakpoints";
import useIntersectionObserver from "../../../lib/hooks/useIntersectionObserver";
import MenuContext from "../../../context/menu/menuContext";

const HeaderComponent = () => {
  const menuContext = useContext(MenuContext);
  const { isSideNavVisible, showSideNav, hideSideNav } = menuContext;
  const headerComponentStyles = {
    background: "white",
    fontFamily: "heading",
    color: "#000",
  };

  // const desktopContainerRef = useRef<HTMLDivElement>(null);
  // const mobileContainerRef = useRef<HTMLDivElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const { isLarge } = useBreakpoints();

  // const desktopIsOnScreen = useIntersectionObserver(desktopContainerRef);
  // const mobileIsOnScreen = useIntersectionObserver(mobileContainerRef);

  const isOnScreen = useIntersectionObserver(containerRef);

  useEffect(() => {
    if (isSideNavVisible) {
      hideSideNav();
    } else {
      showSideNav();
    }
  }, [isOnScreen]);

  return (
    <>
      {isLarge ? (
        <div
          sx={{
            gridColumn: "1 / span 5",
            gridRowStart: "1",
          }}
          ref={containerRef}
        >
          <div
            sx={{
              height: "43px",
              width: "264px",
              marginBottom: "2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "white",
            }}
          >
            <Themed.h1
              sx={{
                fontFamily: "heading",
                color: "#000",
                fontWeight: 800,
                fontSize: "21px",
              }}
            >
              Tristan Rais-Sherman,
            </Themed.h1>
          </div>
          <div
            sx={{
              gridColumn: "1 / span 5",
              height: "43px",
              width: "146px",
              marginBottom: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "white",
            }}
          >
            <Themed.h1
              sx={{
                fontFamily: "heading",
                color: "#000",
                fontWeight: 800,
                fontSize: "21px",
              }}
            >
              Conductor
            </Themed.h1>
          </div>
        </div>
      ) : (
        <>
          <div
            sx={{
              gridColumn: "1 / span 5",
              height: "43px",
              width: "264px",
              marginBottom: "2px",
              background: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            ref={containerRef}
          >
            <Themed.h1
              sx={{
                fontFamily: "heading",
                color: "#000",
                fontWeight: 800,
                fontSize: "21px",
              }}
            >
              Tristan Rais-Sherman,
            </Themed.h1>
          </div>
          <div
            sx={{
              gridColumn: "1 / span 5",
              height: "43px",
              width: "146px",
              marginBottom: "40px",
              background: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Themed.h1
              sx={{
                background: "white",
                fontFamily: "heading",
                color: "#000",
                fontWeight: 800,
                fontSize: "21px",
              }}
            >
              Conductor
            </Themed.h1>
          </div>
        </>
      )}
    </>
  );
};

export default HeaderComponent;
