/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Link } from "gatsby";

import { resetLink } from "../../../lib/utils/mixins";

type Props = {
  slug: string;
  text: string;
  isExternal?: boolean;
  externalUrl?: string;
};

const MobileNavLink = ({ slug, text, isExternal, externalUrl }: Props) => {
  return (
    <>
      {isExternal ? (
        <a
          href={externalUrl}
          sx={{
            ...resetLink,
            color: "white",
            fontSize: "34px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 200,
          }}
        >
          {text}
        </a>
      ) : (
        <Link
          to={slug}
          sx={{
            ...resetLink,
            color: "white",
            fontSize: "34px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 200,
          }}
        >
          {text}
        </Link>
      )}
    </>
  );
};

export default MobileNavLink;
