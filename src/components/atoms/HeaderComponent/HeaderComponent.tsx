/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React, { useRef, useState, useEffect, useContext } from "react";
import * as PropTypes from "prop-types";
import useBreakpoints from "../../../lib/hooks/useBreakpoints";
import useIntersectionObserver from "../../../lib/hooks/useIntersectionObserver";
import MenuContext from "../../../context/menu/menuContext";
import {
  resetButton,
  defaultFullWidthGridChild,
} from "../../../lib/utils/mixins";
const propTypesShape = {
  margin: PropTypes.number,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const HeaderComponent = ({ margin }: Props) => {
  const menuContext = useContext(MenuContext);
  const {
    isSideNavVisible,
    showSideNav,
    hideSideNav,
    isOpen,
    openMenu,
    closeMenu,
  } = menuContext;
  const headerComponentStyles = {
    background: "white",
    fontFamily: "heading",
    color: "#000",
  };

  // console.log(margin);

  const containerRef = useRef<HTMLDivElement>(null);

  const { isLarge } = useBreakpoints();

  const isOnScreen = useIntersectionObserver(containerRef);

  const handleHeaderClick = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

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
        <button
          sx={{
            ...resetButton,
            ...defaultFullWidthGridChild,
            gridRow: "1",
          }}
          onClick={handleHeaderClick}
        >
          <div
            sx={{
              gridColumn: "1 / span 5",
              gridRowStart: "1",
              marginTop: `${margin}px`,
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
        </button>
      ) : (
        <>
          <div
            sx={{
              gridColumn: "1 / span 5",
              height: "43px",
              width: "264px",
              marginBottom: "2px",
              marginTop: `${margin}px`,
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
