/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";
import useBreakpoints from "../../../lib/hooks/useBreakpoints";

const HeaderComponent = () => {
  const headerComponentStyles = {
    background: "white",
    fontFamily: "heading",
    color: "#000",
  };

  const { isLarge } = useBreakpoints();

  return (
    <>
      {isLarge ? (
        <div
          sx={{
            gridColumn: "1 / span 5",
            gridRowStart: "1",
          }}
        >
          <div
            sx={{
              height: "43px",
              width: "264px",
              marginBottom: "2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Themed.h1
              sx={{
                ...headerComponentStyles,
                fontWeight: 800,
                fontSize: "21px",
                height: "100%",
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
            }}
          >
            <Themed.h1
              sx={{
                ...headerComponentStyles,
                fontWeight: 800,
                fontSize: "21px",
                height: "100%",
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
              marginBottom: "2px",
            }}
          >
            <Themed.h1
              sx={{
                ...headerComponentStyles,
                fontWeight: 800,
                fontSize: "21px",
                height: "100%",
                width: "73%",
                display: "flex",
                alignItems: "center",
              }}
            >
              Tristan Rais-Sherman,
            </Themed.h1>
          </div>
          <div
            sx={{
              gridColumn: "1 / span 5",
              height: "43px",
              marginBottom: "40px",
            }}
          >
            <Themed.h1
              sx={{
                ...headerComponentStyles,
                fontWeight: 800,
                fontSize: "21px",
                height: "100%",
                width: "35%",
                display: "flex",
                alignItems: "center",
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
