/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import * as PropTypes from "prop-types";
import Icon from "../../atoms/Icon/Icon";

const socialMediaTypes = [
  "facebook",
  "instagram",
  "pinterest",
  "tikTok",
  "twitter",
  "youTube",
  "twitch",
];

const propTypesShape = {
  socialIcons: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        url: PropTypes.string.isRequired,
        type: PropTypes.oneOf(socialMediaTypes).isRequired,
      }),
    })
  ).isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const HomePageSocial = ({ socialIcons }: Props) => {
  return (
    <div
      sx={{
        gridColumn: ["1 / span 5", null, "1 / span 12"],
        display: ["grid", null, "flex"],
        gridGap: "20px",
        gridTemplateColumns: ["repeat(5, 1fr)", null, "repeat(12, 1fr)"],
        justifyContent: "space-between",
      }}
    >
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
          width: [null, null, "20%"],
        }}
      >
        {socialIcons.map((node) => {
          const iconName = `${node!.node!.type}Icon`;

          return (
            <a key={node!.node!.type} href={node!.node!.url}>
              <Icon name={iconName} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default HomePageSocial;
