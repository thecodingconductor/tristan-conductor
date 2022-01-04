/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import * as PropTypes from "prop-types";
import { Link } from "gatsby";

const propTypesShape = {
  bioText: PropTypes.string.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const BioContainer = (props) => (
  <div
    {...props}
    sx={{
      gridColumn: ["1 / span 5", null, "1 / span 12"],
    }}
  />
);

const HomePageBio = ({ bioText }: Props) => {
  const splitText = JSON.stringify(bioText).split("\\n\\n");

  return (
    <BioContainer>
      <Themed.p
        sx={{
          marginBottom: "20px",
          fontSize: "24px",
        }}
      >
        {splitText[0].slice(1)}
      </Themed.p>
      <Themed.p
        sx={{
          fontSize: "24px",
        }}
      >
        {splitText[1].slice(0, -1)}
      </Themed.p>
      <Link
        to="/about"
        sx={{
          fontFamily: "Inter, sans-serif",
          color: "white",
          fontSize: "18px",
          lineHeight: "27px",
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
