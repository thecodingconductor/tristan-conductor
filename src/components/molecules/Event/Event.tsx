/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import EventDates from "../../atoms/EventDates/EventDates";
import EventLocation from "../../atoms/EventLocation/EventLocation";
import EventPerformers from "../../atoms/EventPerformers/EventPerformers";
import EventTitle from "../../atoms/EventTitle/EventTitle";
import { IGatsbyImageData } from "gatsby-plugin-image";
import Divider from "../../atoms/Divider/Divider";

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

type PerformerType = {
  name: string;
  instrument: string;
};

type EventPerformersType = {
  performers: Array<PerformerType>;
};

type EventPiecesType = {
  pieces: Array<{ title: string } & { composer: string }>;
};

export type Props = {
  eventDates: EventDatesType;
  eventTitle: EventTitleType;
  eventLocation: EventLocationType;
  performers: EventPerformersType;
  pieces?: EventPiecesType;
  image: IGatsbyImageData;
};

const Event = ({
  eventDates,
  eventTitle,
  eventLocation,
  performers,
  image,
}: Props) => {
  return (
    <div
      sx={{
        width: "100%",
        mb: "63px",
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
        {image && (
          <GatsbyImage
            image={image}
            alt="Event Image"
            sx={{
              mb: ["54px"],
            }}
          />
        )}

        <EventDates
          startDate={eventDates.startDate}
          endDate={eventDates.endDate}
        />
      </div>
      <div
        className="event-information-container"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <EventTitle title={eventTitle} />
        <EventLocation
          location={eventLocation.location}
          ensemble={eventLocation.ensemble}
        />
        <EventPerformers performers={performers} />
      </div>
      <Divider />
    </div>
  );
};

export default Event;
