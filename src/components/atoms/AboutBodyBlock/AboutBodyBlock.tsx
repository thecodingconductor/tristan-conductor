/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";
import { isConstructorDeclaration } from "typescript";

type Props = {
  bioText: string;
  rowStart: number;
};

const AboutBodyBlock = ({ bioText, rowStart }: Props) => {
  //   console.log(JSON.stringify(bioText));

  const split = JSON.stringify(bioText).slice(1, -1).split("\\n");
  console.log(split);
  return (
    <div
      sx={{
        gridColumn: ["1 / span 5", null, "8 / span 4"],
        gridRow: rowStart,
      }}
    >
      {split.map((paragraph) => (
        <Themed.p
          key={paragraph}
          sx={{
            mb: "20px",
          }}
        >
          {paragraph}
        </Themed.p>
      ))}
    </div>
  );
};

export default AboutBodyBlock;
