/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React, { useState } from "react";

type Props = {
  type: string;
  label: string;
};

const FormField = ({ type, label }: Props) => {
  const [field, setField] = useState("");

  return (
    <label>
      <Themed.p>{label}</Themed.p>
      <input
        type={type}
        name={type}
        sx={{
          height: "60px",
          background: "rgba(255, 255, 255, 0.04)",
          width: ["100%", null, "50%"],
          border: "1px solid rgba(255, 255, 255, 0.28)",
        }}
        onChange={(e) => setField(e.target.value)}
      />
    </label>
  );
};

export default FormField;
