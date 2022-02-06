/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";

type PerformerType = {
  name: string;
  instrument: string;
};

type Props = {
  performers: Array<PerformerType>;
  isAssistant: boolean;
};

const EventPerformers = ({ performers, isAssistant }: Props) => {
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
              fontSize: "15px !important",
              fontWeight: 600,
            }}
          >
            {instrument}
          </Themed.h1>
          <Themed.h1
            sx={{
              fontSize: "15px !important",
              fontWeight: 300,
            }}
          >
            {name}
          </Themed.h1>
        </div>
      ))}
      {isAssistant && (
        <div
          sx={{
            mb: "28px",
          }}
        >
          <Themed.h1
            sx={{
              fontSize: "15px !important",
              fontWeight: 600,
            }}
          >
            Assistant Conductor
          </Themed.h1>
          <Themed.h1
            sx={{
              fontSize: "15px !important",
              fontWeight: 300,
            }}
          >
            Tristan Rais-Sherman
          </Themed.h1>
        </div>
      )}
    </div>
  );
};

export default EventPerformers;
