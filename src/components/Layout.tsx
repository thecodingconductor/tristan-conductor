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
        background: "#0B1C2C",
      }}
    >
      <div
        sx={{
          height: "inherit",
          width: "inherit",
          display: "grid",
          gridGap: "20px",
          gridTemplateColumns: ["repeat(5, 1fr)", null, "repeat(16, 1fr)"],
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
