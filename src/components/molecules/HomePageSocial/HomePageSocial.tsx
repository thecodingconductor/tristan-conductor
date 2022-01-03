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

const SocialContainer = ({ children }) => (
  <div
    sx={{
      gridColumn: ["1 / span 5", null, "1 / span 16"],
      display: "grid",
      gridGap: "20px",
      gridTemplateColumns: ["repeat(5, 1fr)", null, "repeat(16, 1fr)"],
    }}
  >
    {children}
  </div>
);

type Props = PropTypes.InferProps<typeof propTypesShape>;

const HomePageSocial = ({ socialIcons }: Props) => {
  return (
    <SocialContainer>
      <div
        sx={{
          gridColumn: "1 / span 2",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Themed.h1
          sx={{
            fontSize: "18px",
          }}
        >
          Follow
        </Themed.h1>
      </div>
      <div
        className="socialIconsContainer"
        sx={{
          gridColumn: "3 / span 3",
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
    </SocialContainer>
  );
};

export default HomePageSocial;
