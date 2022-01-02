/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";
import * as PropTypes from "prop-types";
import { removeQuotes } from "../../../lib/utils/helpers";

const propTypesShape = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    thumbnails: PropTypes.array,
    localFile: PropTypes.shape({
      absolutePath: PropTypes.string,
      url: PropTypes.string,
      publicURL: PropTypes.string,
    }),
  }),
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const HomePageInstaTile = ({ node }: Props) => {
  const { id, preview, username, caption, timestamp, thumbnails, localFile } =
    node;

  console.log(localFile);
  console.log(localFile.publicURL);

  return (
    <div
      sx={{
        height: "650px",
        width: "290px",
        gridColumn: ["1 / span 5", null, "1 / span 16"],
      }}
    >
      <img
        src={localFile.publicURL}
        sx={{
          height: "290px",
          width: "290px",
        }}
      />
      <div>
        <Themed.h2>{username}</Themed.h2>
        <Themed.p>{caption}</Themed.p>
        <Themed.p>{timestamp}</Themed.p>
      </div>
    </div>
  );
};

export default HomePageInstaTile;
