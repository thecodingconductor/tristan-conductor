/** @jsx jsx */
import { jsx, Themed } from "theme-ui";

type Props = {
  location: string;
  ensemble: string;
};

const EventLocation = ({ location, ensemble }: Props) => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mb: "28px",
      }}
    >
      <Themed.h2>{ensemble}</Themed.h2>
      <Themed.h2>{location}</Themed.h2>
    </div>
  );
};

export default EventLocation;
