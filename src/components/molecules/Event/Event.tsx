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

type EventPiecesType = {
  pieces: Array<{ title: string } & { composer: string }>;
};

export type Props = {
  eventDates: EventDatesType;
  eventTitle: string;
  eventLocation: EventLocationType;
  performers: Array<PerformerType>;
  pieces?: EventPiecesType;
  image: IGatsbyImageData;
  isAssistant: boolean;
};

const Event = ({
  eventDates,
  eventTitle,
  eventLocation,
  performers,
  image,
  isAssistant,
}: Props) => {
  return (
    <>
      <div
        sx={{
          width: "100%",
          my: "63px",
          display: "grid",
          gridGap: "20px",
          gridTemplateColumns: ["repeat(5, 1fr)", null, "repeat(12, 1fr)"],
        }}
        className="event-container"
      >
        <div
          className="image-dates"
          sx={{
            // display: "flex",
            // flexDirection: ["column", null, "row"],
            gridColumn: ["1 / span 5", null, "1 / span 6"],
            display: "grid",
            gridTemplateColumns: ["repeat(5, 1fr)", null, "repeat(6, 1fr)"],
          }}
        >
          {image && (
            <GatsbyImage
              image={image}
              alt="Event Image"
              sx={{
                mb: ["54px"],
                // mr: [null, null, "58px"],
                gridColumn: ["1 / span 5", null, "1 / span 4"],
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
            gridColumn: ["1 / span 5", null, "8 / span 4"],
          }}
        >
          <EventTitle title={eventTitle} />
          <EventLocation
            location={eventLocation.location}
            ensemble={eventLocation.ensemble}
          />
          <EventPerformers performers={performers} isAssistant={isAssistant} />
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Event;
