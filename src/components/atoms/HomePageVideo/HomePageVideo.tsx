/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const videoContainerStyles = {
  gridColumn: ["1 / span 5", null, "1 / span 16"],
  paddingBottom: "56.25%",
  height: 0,
};

const iframeStyles = {
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
};

const HomePageVideo = ({ videoSrcURL, videoTitle, ...props }) => {
  return (
    <div
      className="videoContainer"
      sx={{
        ...videoContainerStyles,
        position: "relative",
      }}
    >
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
        sx={{
          ...iframeStyles,
          position: "absolute",
        }}
      ></iframe>
    </div>
  );
};

export default HomePageVideo;
