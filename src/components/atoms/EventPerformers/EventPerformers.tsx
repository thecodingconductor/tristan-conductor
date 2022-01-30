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
        <React.Fragment key={name}>
          <Themed.h1>{name}</Themed.h1>
          <Themed.h1>{instrument}</Themed.h1>
        </React.Fragment>
      ))}
    </div>
  );
};

export default EventPerformers;
