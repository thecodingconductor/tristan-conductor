/** @jsx jsx */
import { jsx, Themed } from "theme-ui";

type Props = {
  title: string;
};

const EventTitle = ({ title }: Props) => {
  return (
    <Themed.h1 sx={{ fontWeight: "body", fontSize: "38px", mb: "60px" }}>
      {title}
    </Themed.h1>
  );
};

export default EventTitle;
