/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";

type PieceType = {
  title: string;
  composer: string;
};

type Props = {
  pieces: Array<PieceType>;
};

const EventPieces = ({ pieces }: Props) => {
  return (
    <div>
      {pieces.map(({ title, composer }) => (
        <React.Fragment key={title}>
          <Themed.p>{title}</Themed.p>
          <Themed.p>{composer}</Themed.p>
        </React.Fragment>
      ))}
    </div>
  );
};

export default EventPieces;
