import React from "react";
import * as PropTypes from "prop-types";

import { Link, graphql } from "gatsby";

const propTypesShape = {
  data: PropTypes.shape({
    // String with the site headline
    headlineHero: PropTypes.string.isRequired,
  }),
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const HeadlineHero = ({ data }: Props) => {
  return (
    <div>
      <h1>{data.headlineHero}</h1>
    </div>
  );
};

export default HeadlineHero;
