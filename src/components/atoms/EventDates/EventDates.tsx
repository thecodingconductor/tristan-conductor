/** @jsx jsx */
import { jsx, Themed } from "theme-ui";

type Props = {
  startDate: string;
  endDate?: string;
};

// TODO Date Formatting.
const EventDates = ({ startDate, endDate }: Props) => {
  return (
    <div>
      <Themed.p>{startDate}</Themed.p>
      {endDate && <Themed.p> - endDate</Themed.p>}
    </div>
  );
};

export default EventDates;
