/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Link } from "gatsby";
import { resetList } from "../lib/utils/mixins";

const headerContainerStyles = {
  height: "100px",
  width: "100%",
  backgroundColor: "greyLight",
};

const navLinksContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const Header = () => {
  return (
    <div
      sx={{
        ...headerContainerStyles,
      }}
    >
      <h1>Tristan Rais-Sherman, Conductor</h1>
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
