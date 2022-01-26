/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React, { useRef, useEffect } from "react";
import useBreakpoints from "../../../lib/hooks/useBreakpoints";
import useIntersectionObserver from "../../../lib/hooks/useIntersectionObserver";

import {
  resetButton,
  defaultFullWidthGridChild,
} from "../../../lib/utils/mixins";

type Props = {
  margin?: number;
  closeMenu: Function;
  openMenu: Function;
  isSideNavVisible: boolean;
  isOpen: boolean;
  showSideNav: Function;
  hideSideNav: Function;
};

const HeaderComponent = ({
  margin,
  closeMenu,
  openMenu,
  isOpen,
  showSideNav,
  hideSideNav,
}: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { isLarge } = useBreakpoints();

  const entry = useIntersectionObserver(containerRef, {});

  const isVisible = !!entry?.isIntersecting;

  const handleHeaderClick = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  useEffect(() => {
    if (isVisible) {
      hideSideNav();
    } else {
      showSideNav();
    }
  }, [isVisible]);

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
          </button>
        </>
      )}
    </>
  );
};

export default HeaderComponent;
