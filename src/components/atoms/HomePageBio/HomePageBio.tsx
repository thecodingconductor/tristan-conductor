/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import * as PropTypes from "prop-types";

const propTypesShape = {
  bioText: PropTypes.string.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const BioContainer = (props) => (
  <div
    {...props}
    sx={{
      gridColumn: ["1 / span 5", null, "1 / span 16"],
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
        }}
      >
        {splitText[0].slice(1)}
      </Themed.p>
      <Themed.p>{splitText[1].slice(0, -1)}</Themed.p>
    </BioContainer>
  );
};

export default HomePageBio;
