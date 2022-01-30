/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";
import { getImage, GatsbyImage } from "gatsby";
import EventDates from "../../atoms/EventDates/EventDates";
import EventLocation from "../../atoms/EventLocation/EventLocation";
import EventPerformers from "../../atoms/EventPerformers/EventPerformers";
import EventTitle from "../../atoms/EventTitle/EventTitle";
import { IGatsbyImageData } from "gatsby-plugin-image";

type EventDatesType = {
  startDate: string;
  endDate?: string;
};

type EventTitleType = {
  title: string;
};

type EventLocationType = {
  location: string;
  ensemble: string;
};

type EventPerformersType = {
  performers: Array<{ name: string } & { instrument: string }>;
};

type EventPiecesType = {
  pieces: Array<{ title: string } & { composer: string }>;
};

type Props = {
  eventDates: EventDatesType;
  eventTitle: EventTitleType;
  eventLocation: EventLocationType;
  performers: EventPerformersType;
  pieces: EventPiecesType;
  image: IGatsbyImageData;
};

const Event = ({
  eventDates,
  eventTitle,
  eventLocation,
  performers,
  pieces,
  image,
}: Props) => {
  return (
    <div
      sx={{
        width: "100%",
      }}
      className="event-container"
    >
      <div
        className="image-dates"
        sx={{
          display: "flex",
          flexDirection: ["column", null, "row"],
        }}
      >
        <GatsbyImage image={image} />
        <EventDates
          startDate={eventDates.startDate}
          endDate={eventDates.endDate}
        />
      </div>
      <div className=""></div>
    </div>
  );
};

export default Event;
