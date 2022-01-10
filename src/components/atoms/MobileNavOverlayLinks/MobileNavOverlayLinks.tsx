/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";
import { Link } from "gatsby";
import { resetList, resetLink } from "../../../lib/utils/mixins";
import MobileNavLink from "../MobileNavLink/MobileNavLink";

const MobileNavOverlayLinks = () => {
  return (
    <ul
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
        ...resetList,
      }}
    >
      <li>
        <MobileNavLink slug={"/latest"} text={"Latest"} />
      </li>
      <li>
        <MobileNavLink slug={"/about"} text={"About"} />
      </li>
      <li>
        <MobileNavLink slug={"/season"} text={"Season"} />
      </li>
      <li>
        <MobileNavLink slug={"/gallery"} text={"Gallery"} />
      </li>
      <li>
        <MobileNavLink
          slug={"/twitch"}
          text={"Twitch"}
          isExternal={true}
          externalUrl={"https://www.twitch.tv"}
        />
      </li>
      <li>
        <MobileNavLink slug={"/contact"} text={"Contact"} />
      </li>
    </ul>
  );
};

export default MobileNavOverlayLinks;
