/** @jsx jsx */
import { jsx, Themed } from "theme-ui";

type Props = {
  quoteText: string;
  rowStart: number;
};

const AboutQuoteBlock = ({ quoteText, rowStart }: Props) => {
  return (
    <div
      sx={{
        gridColumn: ["1 / span 5", null, "1 / span 6"],
        gridRow: rowStart,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: "120px",
      }}
    >
      <div>
        <Themed.p
          sx={{
            fontFamily: "quote",
            fontSize: "128px",
          }}
        >
          "
        </Themed.p>
      </div>
      <div>
        <Themed.p
          sx={{
            fontFamily: "quote",
            fontStyle: "italic",
            fontSize: "25px",
            textAlign: "center",
            mb: "50px",
          }}
        >
          {quoteText}
        </Themed.p>
      </div>
      <div>
        <Themed.p>-Tristan</Themed.p>
      </div>
    </div>
  );
};

export default AboutQuoteBlock;
