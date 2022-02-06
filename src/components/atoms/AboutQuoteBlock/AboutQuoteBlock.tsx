/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import QuoteIcon from "../../../assets/quote.svg";

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
      <div
        sx={{
          marginBottom: "size70",
        }}
      >
        {/* <Themed.p
          sx={{
            fontFamily: "quote",
            fontStyle: "italic",
            fontSize: "128px !important",
          }}
        >
          "
        </Themed.p> */}
        <QuoteIcon />
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
