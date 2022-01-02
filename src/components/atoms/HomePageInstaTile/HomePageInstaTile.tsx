/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";
import * as PropTypes from "prop-types";
import { removeQuotes } from "../../../lib/utils/helpers";

const propTypesShape = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    permalink: PropTypes.string.isRequired,
    thumbnail_url: PropTypes.string.isRequired,
    localImage: PropTypes.shape({
      absolutePath: PropTypes.string.isRequired,
    }),
    media_url: PropTypes.string.isRequired,
  }),
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const HomePageInstaTile = ({ node }: Props) => {
  console.log(node);
  const {
    id,
    username,
    caption,
    timestamp,
    localImage,
    permalink,
    thumbnail_url,
    media_url,
  } = node;

  // console.log(localFile);
  // console.log(localFile.publicURL);

  console.log(timestamp);

  return (
    <div
      sx={{
        height: "650px",
        gridColumn: ["1 / span 5", null, "1 / span 16"],
      }}
    >
      {/* ToDO fix img dimensions. Maybe create an atom Component */}
      <img
        src={thumbnail_url || media_url}
        sx={{
          height: "290px",
          width: "100%",
        }}
      />
      <div>
        <Themed.h2>@tristanrais</Themed.h2>
        <Themed.p>{caption}</Themed.p>
        <Themed.p>{timestamp}</Themed.p>
      </div>
    </div>
  );
};

export default HomePageInstaTile;
