/** @jsx jsx */
import { jsx } from "theme-ui";
import Footer from "./Footer";
import Background from "./atoms/Background/Background";

import "@fontsource/inter";

const Layout = ({ children }) => {
  return (
    <div
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
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
      <Background />
    </div>
  );
};

export default Layout;
