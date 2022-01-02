/** @jsx jsx */
import { jsx } from "theme-ui";
import Footer from "./Footer";

import "@fontsource/inter";

const globalSiteContainerStyles = {
  width: "100%",

  backgroundColor: "black",
};

const gridParentStyles = {
  height: "inherit",
  width: "inherit",
  display: "grid",
  gridGap: "20px",
  gridTemplateColumns: ["repeat(5, 1fr)", null, "repeat(16, 1fr)"],
  padding: ["0 30px", null, "0 140px"],
};

const Layout = ({ children }) => {
  return (
    <div
      sx={{
        ...globalSiteContainerStyles,
      }}
    >
      <div
        sx={{
          ...gridParentStyles,
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
