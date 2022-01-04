/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const videoContainerStyles = {
  gridColumn: ["1 / span 5", null, "1 / span 16"],
  paddingBottom: "56.25%",
  height: 0,
};

const VideoContainer = ({ children }) => (
  <div
    sx={{
      gridColumn: ["1 / span 5", null, "1 / span 12"],
      paddingBottom: "56.25%",
      height: 0,
      position: "relative",
      marginBottom: "50px",
    }}
  >
    {children}
  </div>
);

const HomePageVideo = ({ videoSrcURL, videoTitle, ...props }) => {
  return (
    <VideoContainer>
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
        sx={{
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      ></iframe>
    </VideoContainer>
  );
};

export default HomePageVideo;
