/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";

type Props = {
  bioText: string;
  rowStart: number;
};

const AboutBodyBlock = ({ bioText, rowStart }: Props) => {
  return (
    <div
      sx={{
        gridColumn: ["1 / span 5", null, "8 / span 4"],
        gridRow: rowStart,
      }}
    >
      <Themed.p>{bioText}</Themed.p>
    </div>
  );
};

export default AboutBodyBlock;
