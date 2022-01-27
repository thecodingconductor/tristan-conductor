/** @jsx jsx */
import { jsx, Themed } from "theme-ui";

type Props = {
  bioText: string;
  rowStart: number;
};

const AboutBodyBlock = ({ bioText, rowStart }: Props) => {
  const split = JSON.stringify(bioText).slice(1, -1).split("\\n");

  return (
    <div
      sx={{
        gridColumn: ["1 / span 5", null, "8 / span 5"],
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
