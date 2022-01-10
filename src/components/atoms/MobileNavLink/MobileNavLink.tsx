/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";
import { Link } from "gatsby";
import * as PropTypes from "prop-types";
import { resetLink } from "../../../lib/utils/mixins";

const propTypesShape = {
  slug: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
  externalUrl: PropTypes.string,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

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
