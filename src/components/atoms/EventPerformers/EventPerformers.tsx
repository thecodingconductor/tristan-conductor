/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";

type PerformerType = {
  name: string;
  instrument: string;
};

type Props = {
  performers: Array<PerformerType>;
};

const EventPerformers = ({ performers }: Props) => {
  return (
    <div>
      {performers.map(({ name, instrument }) => (
        <div
          key={name}
          sx={{
            mb: "28px",
          }}
        >
          <Themed.h1
            sx={{
              fontSize: "15px",
              fontWeight: 700,
            }}
          >
            {instrument}
          </Themed.h1>
          <Themed.h1
            sx={{
              fontSize: "15px",
              fontWeight: 300,
            }}
          >
            {name}
          </Themed.h1>
        </div>
      ))}
    </div>
  );
};

export default EventPerformers;
