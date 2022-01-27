import React from "react";
import GlobalState from "./src/context/global/GlobalState";
import Layout from "./src/components/Layout";

export const wrapRootElement = ({ element }) => {
  return <GlobalState>{element}</GlobalState>;
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === "undefined") {
    await import("intersection-observer");
  }
};
