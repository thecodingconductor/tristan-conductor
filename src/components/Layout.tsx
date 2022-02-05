/** @jsx jsx */
import { jsx } from "theme-ui";
import { useContext, ReactNode, useState, useEffect } from "react";

import Footer from "./Footer";
import Background from "./atoms/Background/Background";
import MobileNavOverlay from "./molecules/MobileNavOverlay/MobileNavOverlay";

import MobileNavIcon from "./atoms/MobileNavIcon/MobileNavIcon";
import "@fontsource/inter";
import "@fontsource/lora";

import GlobalContext from "../context/global/globalContext";
import SEO from "../components/seo";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const globalContext = useContext(GlobalContext);
  const { closeMenu, openMenu, isOpen, isSideNavVisible } = globalContext!.menu;
  const { currentPage } = globalContext!.currentPage;

  return (
    <div
      sx={{
        width: "100%",
        height: "100%",
      }}
      className="layout-wrap"
    >
      <SEO />
      <MobileNavIcon
        closeMenu={closeMenu!}
        openMenu={openMenu!}
        isOpen={isOpen}
        isSideNavVisible={isSideNavVisible}
      />
      <div
        sx={{
          height: "inherit",
          width: "inherit",
          display: "grid",
          gridGap: "20px",
          gridTemplateColumns: ["repeat(5, 1fr)", null, "repeat(12, 1fr)"],
          padding: ["0 30px", null, "0 140px"],
        }}
      >
        {children}
      </div>
      <Footer />

      {/* <Background currentUrl={currentPage} /> */}

      <MobileNavOverlay isOpen={isOpen} closeMenu={closeMenu!} />
    </div>
  );
};

export default Layout;
