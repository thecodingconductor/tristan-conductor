/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { resetLink } from "../../../lib/utils/mixins";

type Props = {
  title: string;
  eventUrl?: string;
};

const EventTitle = ({ title, eventUrl }: Props) => {
  return (
    <a
      href={eventUrl ? eventUrl : "https://www.philorch.org"}
      sx={{
        ...resetLink,
      }}
    >
      <Themed.h1 sx={{ fontWeight: "body", fontSize: "38px", mb: "60px" }}>
        {title}
      </Themed.h1>
    </a>
  );
};

export default EventTitle;
