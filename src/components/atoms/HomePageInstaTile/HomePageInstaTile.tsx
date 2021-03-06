/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import * as PropTypes from "prop-types";
import RelativeTime from "@yaireo/relative-time";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { Node } from "gatsby";
import { FC } from "react";

const propTypesShape = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    permalink: PropTypes.string.isRequired,
    thumbnail_url: PropTypes.string.isRequired,
    localImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        backgroundColor: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        images: PropTypes.shape({
          fallback: PropTypes.shape({
            sizes: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired,
            srcSet: PropTypes.string.isRequired,
          }),
          sources: PropTypes.arrayOf(
            PropTypes.shape({
              sizes: PropTypes.string.isRequired,
              src: PropTypes.string.isRequired,
              srcSet: PropTypes.string.isRequired,
            })
          ),
        }),
      }),
    }),
    media_url: PropTypes.string.isRequired,
  }),
};

type Props = PropTypes.InferProps<typeof propTypesShape & ImageDataLike & Node>;

const TileContainer: FC = (props) => (
  <div
    {...props}
    sx={{
      height: "650px",
      gridColumn: ["1 / span 5", null, "1 / span 12"],
    }}
  />
);

const HomePageInstaTile = ({ node }: Props) => {
  const { username, caption, timestamp, localFile } = node;

  const relativeTime = new RelativeTime();
  const dateSince = relativeTime.from(new Date(timestamp));

  const image = getImage(localFile.childImageSharp.gatsbyImageData);

  return (
    <TileContainer>
      <GatsbyImage image={image!} alt={"Instagram post"} />
      <div
        sx={{
          background: "rgba(255, 255, 255, 0.04)",
          height: "50%",
          position: "relative",
        }}
      >
        <Themed.p
          sx={{
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: "27px",
            margin: "10px",
          }}
        >
          {username}
        </Themed.p>
        <Themed.p
          sx={{
            fontSize: "12px",
            margin: "10px",
          }}
        >
          {`${caption.substring(0, 100)}...`}
        </Themed.p>
        <Themed.p
          sx={{
            fontSize: "12px",
            margin: "10px",
            color: "rgba(252, 253, 255, 0.41)",
            position: "absolute",
            bottom: 0,
          }}
        >
          {dateSince}
        </Themed.p>
      </div>
    </TileContainer>
  );
};

export default HomePageInstaTile;
