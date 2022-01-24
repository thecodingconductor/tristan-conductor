/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

type Props = {
  videoSrcURL: string;
  videoTitle: string;
};

const GalleryVideo = ({ videoSrcURL, videoTitle }: Props) => {
  return (
    <>
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
    </>
  );
};

export default GalleryVideo;
