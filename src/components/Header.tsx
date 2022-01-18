/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { Link } from "gatsby";
import { resetList } from "../lib/utils/mixins";
import { useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";

const headerContainerStyles = {};

const navLinksContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const HeaderContainer = ({ children }) => (
  <div
    sx={{
      height: "100px",
      width: "100%",
      backgroundColor: ["alert", "vuoriBlue"],
    }}
  >
    {children}
  </div>
);

const Header = () => {
  const layoutContext = useContext(LayoutContext);

  console.log(layoutContext);
  return (
    <div
      sx={{
        ...headerContainerStyles,
      }}
    >
      <Themed.h1>Tristan Rais-Sherman, Conductor</Themed.h1>
      <ul
        sx={{
          ...resetList,
          ...navLinksContainer,
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/content">Content</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
