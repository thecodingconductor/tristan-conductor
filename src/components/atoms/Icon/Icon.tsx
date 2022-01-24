import parse, {
  domToReact,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";
import * as PropTypes from "prop-types";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

import iconData, { iconKeys } from "../../../lib/constants/icons";

const propTypesShape = {
  className: PropTypes.string,
  name: PropTypes.oneOf(iconKeys).isRequired,
};

type IconType = PropTypes.InferProps<typeof propTypesShape>;

const iconStyles = {
  alignItems: "center",
  display: "flex",
  color: "white",
};

const parseOptions: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.attribs) {
      const { attribs, children, name } = domNode;
      if (name === "svg") {
        return (
          <svg aria-hidden={true} {...attribs}>
            {domToReact(children)}
          </svg>
        );
      }
    }
  },
};

const Icon = ({ className, name }: IconType) => {
  const icon = iconData[name];

  return <span className={className}>{parse(icon, parseOptions)}</span>;
};

Icon.propTypes = propTypesShape;

export default Icon;

export const TwitterIcon = (props) => <Icon {...props} name="twitterIcon" />;
export const TwitchIcon = (props) => <Icon {...props} name="twitchIcon" />;
export const InstagramIcon = (props) => (
  <Icon {...props} name="instagramIcon" />
);
