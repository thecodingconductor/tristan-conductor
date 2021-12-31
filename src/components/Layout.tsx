/** @jsx jsx */
import { jsx } from "theme-ui";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import "@fontsource/inter";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
