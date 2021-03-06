/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { useState } from "react";

type Props = {
  type: string;
  label: string;
};

const FormField = ({ type, label }: Props) => {
  const [field, setField] = useState("");

  return (
    <label
      sx={{
        mb: "87px",
        width: ["100%", null, "50%"],
      }}
    >
      <Themed.p
        sx={{
          mb: "10px",
        }}
      >
        {label}
      </Themed.p>
      {type === "textarea" ? (
        <textarea
          name={type}
          sx={{
            height: "60px",
            background: "rgba(255, 255, 255, 0.04)",
            width: "100%",
            border: "1px solid rgba(0, 0, 0, 0.28)",
            color: "black",
            fontFamily: "body",
            resize: "none",
          }}
          onChange={(e) => setField(e.target.value)}
          placeholder="Please enter a message..."
          rows={10}
        />
      ) : (
        <input
          type={type}
          name={type}
          sx={{
            height: "60px",
            background: "rgba(255, 255, 255, 0.04)",
            width: "100%",
            border: "1px solid rgba(0, 0, 0, 0.28)",
            color: "black",
            fontFamily: "body",
          }}
          onChange={(e) => setField(e.target.value)}
        />
      )}
    </label>
  );
};

export default FormField;
