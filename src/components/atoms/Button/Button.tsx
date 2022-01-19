/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import * as PropTypes from "prop-types";
import {
  resetButton,
  defaultFullWidthGridChild,
} from "../../../lib/utils/mixins";

const propTypesShape = {
  /**
   * onClick function defines what happens when button is clicked.
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Text string which appears in button.
   */
  label: PropTypes.string.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

const Button = ({ onClick, label }: Props) => {
  return (
    <div
      sx={{
        ...defaultFullWidthGridChild,
        display: "flex",
        justifyContent: "center",
        mb: "100px",
      }}
    >
      <button
        onClick={onClick}
        sx={{
          ...resetButton,

          height: "60px",
          width: "274px",
          border: "1px solid #FFFFFF",
        }}
      >
        <span
          sx={{
            color: "white",
          }}
        >
          {label}
        </span>
      </button>
    </div>
  );
};

export default Button;
