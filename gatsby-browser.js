import React from "react";
import GlobalState from "./src/context/global/GlobalState";

export const wrapRootElement = ({ element }) => {
  return <GlobalState>{element}</GlobalState>;
};
