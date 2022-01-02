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
  return (
    <BioContainer>
      <Themed.p>{bioText}</Themed.p>
    </BioContainer>
  );
};

export default HomePageBio;
