/** @jsx jsx */
import { jsx } from "theme-ui";
import { FC } from "react";

type Props = {
  isSmaller: boolean;
};

const DividerDiv = (props: any) => (
  <div
    {...props}
    sx={{
      gridColumn: [
        "1 / span 5",
        null,
        props.isSmaller ? "1  / span 10" : "1 / span 12",
      ],
      my: ["size50", null, "size80"],
    }}
  />
);

const Divider = (props: any) => {
  return (
    <DividerDiv isSmaller={props.isSmaller}>
      <hr
        sx={{
          margin: "30 px - 20 px 20 px",
          border: 0,
          borderTop: "1px solid rgba(0, 0, 0, 0.13)",
        }}
      />
    </DividerDiv>
  );
};

export default Divider;
