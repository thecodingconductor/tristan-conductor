/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import * as PropTypes from "prop-types";
import Icon from "../../atoms/Icon/Icon";
import React from "react";

const socialMediaTypes = [
  "facebook",
  "instagram",
  "pinterest",
  "tikTok",
  "twitter",
  "youTube",
];

const propTypesShape = {
  socialIcons: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      type: PropTypes.oneOf(socialMediaTypes).isRequired,
    })
  ).isRequired,
};

const socialContainerStyles = {
  gridColumn: ["1 / span 5", null, "1 / span 16"],
  display: "flex",
  justifyContent: "spacebetween",
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const HomePageSocial = ({ socialIcons }: Props) => {
  return (
    <div
      sx={{
        ...socialContainerStyles,
      }}
    >
      <div
        className="follow"
        sx={{
          width: "50%",
        }}
      >
        <Themed.h1>Follow</Themed.h1>
      </div>
      <div
        className="socialIconsContainer"
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {socialIcons.map(({ url, type }) => {
          const iconName = `${type}Icon`;
          return (
            <a key={type} href={url}>
              <Icon name={iconName} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default HomePageSocial;
