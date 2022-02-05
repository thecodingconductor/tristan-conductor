/** @jsx jsx */
import { jsx, Themed } from "theme-ui";

type Props = {
  startDate: string;
  endDate?: string;
};

// TODO Date Formatting.
const EventDates = ({ startDate, endDate }: Props) => {
  return (
    <div
      sx={{
        mb: "40px",
        gridColumn: ["1 / span 5", null, "6 / span 2"],
      }}
    >
      <Themed.p
        sx={{
          fontSize: "21px",
        }}
      >
        {startDate}
      </Themed.p>
      {endDate && (
        <Themed.p
          sx={{
            fontSize: "21px",
          }}
        >
          {" "}
          - {endDate}
        </Themed.p>
      )}
    </div>
  );
};

export default EventDates;
