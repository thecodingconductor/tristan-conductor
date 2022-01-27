/** @jsx jsx */
import { jsx } from "theme-ui";
import { FC } from "react";

const DividerDiv: FC = (props) => (
  <div
    {...props}
    sx={{
      gridColumn: ["1 / span 5", null, "1  / span 12"],
      marginTop: "50px",
    }}
  />
);

const Divider: FC = () => {
  return (
    <DividerDiv>
      <hr
        sx={{
          margin: "30 px - 20 px 20 px",
          border: 0,
          borderTop: "1px solid rgba(255, 255, 255, 0.13)",
        }}
      />
    </DividerDiv>
  );
};

export default Divider;