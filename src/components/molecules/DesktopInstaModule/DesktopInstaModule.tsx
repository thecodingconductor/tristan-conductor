/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import * as PropTypes from "prop-types";

import HomePageInstaTile from "../../atoms/HomePageInstaTile/HomePageInstaTile";

const propTypesShape = {
  instaPosts: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const DesktopInstaModule = ({ instaPosts }: Props) => {
  return (
    <div
      sx={{
        gridColumn: ["1/ span 5", null, "1 / span 12"],
        display: "grid",
        gridGap: "20px",
        gridTemplateColumns: "repeat(12, 1fr)",
      }}
    >
      {instaPosts.map((post) => {
        console.log(post);
        return (
          <div
            sx={{
              gridColumn: "auto / span 4",
            }}
            key={post.node.id}
          >
            <HomePageInstaTile node={post.node} />
          </div>
        );
      })}
    </div>
  );
};

export default DesktopInstaModule;
