/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { FC } from "react";
import * as PropTypes from "prop-types";
import { Link } from "gatsby";
import { resetLink } from "../../../lib/utils/mixins";

const propTypesShape = {
  newsDate: PropTypes.string.isRequired,
  newsTitle: PropTypes.string.isRequired,
  isFirst: PropTypes.bool.isRequired,
  newsLink: PropTypes.string.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const DescriptionContainer: FC = ({ children }) => (
  <div
    sx={{
      gridColumn: ["3 / span 3", null, "6 / span 7"],
    }}
  >
    {children}
  </div>
);

const DateContainer: FC = ({ children }) => (
  <div
    sx={{
      gridColumn: "1 / span 2",
    }}
  >
    {children}
  </div>
);

const HomePageNewsItem = ({
  newsDate,
  newsTitle,
  isFirst,
  newsLink,
}: Props) => {
  return (
    <div
      sx={{
        gridColumn: ["1 / span 5", null, "1 / span 12"],
        display: "grid",
        gridGap: "20px",
        gridTemplateColumns: ["repeat(5, 1fr)", null, "repeat(12, 1fr)"],
        marginBottom: isFirst && "70px",
      }}
    >
      <DateContainer>
        <Themed.p>{newsDate}</Themed.p>
      </DateContainer>
      <DescriptionContainer>
        <a
          href={newsLink}
          sx={{
            ...resetLink,
            textDecoration: "underline",
          }}
        >
          <Themed.p>{newsTitle}</Themed.p>
        </a>
      </DescriptionContainer>
    </div>
  );
};

export default HomePageNewsItem;
