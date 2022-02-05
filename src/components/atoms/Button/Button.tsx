/** @jsx jsx */
import { jsx } from "theme-ui";

import * as PropTypes from "prop-types";
import { resetButton } from "../../../lib/utils/mixins";

const propTypesShape = {
  /**
   * onClick function defines what happens when button is clicked.
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Text string which appears in button.
   */
  label: PropTypes.string.isRequired,
  /**
   * Boolean for if it is not wrapped
   */
  isParent: PropTypes.bool,
  isSubmit: PropTypes.bool,
  isFullWidth: PropTypes.bool,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const Button = ({ onClick, label, isParent, isSubmit, isFullWidth }: Props) => {
  return (
    <div
      sx={{
        ...(isParent && { gridColumn: ["1 / span 5", null, "1 / span 12"] }),
        display: "flex",
        justifyContent: "center",
        mb: "100px",
        width: isFullWidth && ["100%", null, null],
      }}
    >
      {isSubmit ? (
        <button
          onClick={onClick}
          sx={{
            ...resetButton,

            height: "60px",
            width: "274px",
            border: "1px solid black",
          }}
          type="submit"
        >
          <span
            sx={{
              color: "black",
            }}
          >
            {label}
          </span>
        </button>
      ) : (
        <button
          onClick={onClick}
          sx={{
            ...resetButton,

            height: "60px",
            width: "274px",
            border: "1px solid black",
          }}
        >
          <span
            sx={{
              color: "black",
            }}
          >
            {label}
          </span>
        </button>
      )}
    </div>
  );
};

export default Button;
