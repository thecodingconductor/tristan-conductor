/** @jsx jsx */
import { jsx, Themed } from "theme-ui";

type Props = {
  title: string;
};

const EventTitle = ({ title }: Props) => {
  return <Themed.h1 sx={{}}>{title}</Themed.h1>;
};

export default EventTitle;
