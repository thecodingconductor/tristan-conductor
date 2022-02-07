/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import * as PropTypes from "prop-types";
import { Link } from "gatsby";
import { FC } from "react";

const propTypesShape = {
  bioText: PropTypes.string.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const BioContainer: FC = ({ children }) => (
  <div
    sx={{
      gridColumn: ["1 / span 5", null, "1 / span 12"],
    }}
  >
    {children}
  </div>
);

const HomePageBio = ({ bioText }: Props) => {
  let splitText = JSON.stringify(bioText).split("\\n\\n");
  if (splitText.length < 2) {
    splitText = JSON.stringify(bioText).split("\\n");
  }

  return (
    <BioContainer>
      <Themed.p
        sx={{
          marginBottom: "20px",
          fontSize: ["24px", null, "73px"],
          lineHeight: ["36px", null, "93px"],
        }}
      >
        {splitText[0].slice(1)}
      </Themed.p>
      <Themed.p
        sx={{
          fontSize: ["24px", null, "73px"],
          lineHeight: ["36px", null, "93px"],
        }}
      >
        {splitText[1].slice(0, -1)}
      </Themed.p>
      <Link
        to="/about"
        sx={{
          fontFamily: "Inter, sans-serif",
          color: "black",
          fontSize: [2, null, 3],
          lineHeight: "36px",
          textDecoration: "underline",
          marginTop: "20px",
          display: "block",
        }}
      >
        Learn more
      </Link>
    </BioContainer>
  );
};

export default HomePageBio;
