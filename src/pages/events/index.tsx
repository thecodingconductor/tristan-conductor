/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import React, { useEffect, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { resetButton } from "../../lib/utils/mixins";
import Event from "../../components/molecules/Event/Event";
import Divider from "../../components/atoms/Divider/Divider";
import GlobalContext from "../../context/global/globalContext";
import HeaderComponent from "../../components/atoms/HeaderComponent/HeaderComponent";

const Events = ({ location }: any) => {
  const globalContext = useContext(GlobalContext);
  const {
    closeMenu,
    openMenu,
    isSideNavVisible,
    isOpen,
    showSideNav,
    hideSideNav,
  } = globalContext!.menu;

  const { currentPage, setCurrentPage } = globalContext!.currentPage;

  const {
    eventType,
    showPastEvents,
    showUpcomingEvents,
    sortEvents,
    upcomingEvents,
    pastEvents,
  } = globalContext!.events;

  const data = useStaticQuery(graphql`
    query {
      allContentfulEvents(sort: { fields: startDate, order: ASC }) {
        edges {
          node {
            startDate(formatString: "MM/DD/YYYY")

            endDate(formatString: "MM/DD/YYYY")
            eventId
            eventImage {
              gatsbyImageData(placeholder: BLURRED, aspectRatio: 1, height: 368)
            }
            eventInformation {
              performers {
                instrument
                name
              }
              pieces {
                composer
                title
              }
              ensemble
            }
            eventLocation
            eventTitle
            isAssistant
            eventUrl
          }
        }
      }
      allContentfulEventBackgroundImage {
        edges {
          node {
            backgroundImage {
              gatsbyImageData(height: 1000, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const isDateInPast = (eventDate: Date) => {
    const today = new Date();

    if (eventDate.setHours(0, 0, 0, 0) <= today.setHours(0, 0, 0, 0)) {
      return true;
    }

    return false;
  };

  // useEffect(() => {
  //   data.allContentfulEvents.edges.forEach((node) => {
  //     console.log(!isDateInPast(new Date(node.node.startDate)));
  //   });

  //   const upcomingEvents = data.allContentfulEvents.edges
  //     .map(({ node }: any) =>
  //       !isDateInPast(new Date(node.startDate)) ? node : null
  //     )
  //     .filter((node: any) => node);
  // }, []);

  useEffect(() => {
    setCurrentPage!(location.pathname);
  }, []);

  useEffect(() => {
    isOpen && closeMenu!();
    hideSideNav!();
  }, []);

  useEffect(() => {
    sortEvents!(data.allContentfulEvents.edges);
    showUpcomingEvents!();
  }, []);

  const backgroundImage = getImage(
    data.allContentfulEventBackgroundImage.edges[0].node.backgroundImage
      .gatsbyImageData
  );

  return (
    <>
      <HeaderComponent
        closeMenu={closeMenu!}
        openMenu={openMenu!}
        isSideNavVisible={isSideNavVisible}
        isOpen={isOpen}
        showSideNav={showSideNav!}
        hideSideNav={hideSideNav!}
        margin={50}
      />
      <div
        sx={{
          gridColumn: ["1 / span 5", null, "1 / span 12"],
        }}
      >
        <Themed.h1
          sx={{
            marginBottom: ["size50", null, "size70"],
          }}
        >
          See Tristan live this season
        </Themed.h1>
        <div
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <button sx={{ ...resetButton }} onClick={() => showUpcomingEvents!()}>
            <Themed.h2
              sx={{
                color: "black",
              }}
            >
              Upcoming
            </Themed.h2>
          </button>
          <button sx={{ ...resetButton }} onClick={() => showPastEvents!()}>
            <Themed.h2
              sx={{
                color: "black",
              }}
            >
              Past
            </Themed.h2>
          </button>
        </div>
        <Divider />
        {eventType === "upcoming"
          ? upcomingEvents.map(({ node }: any) => {
              const eventDates = {
                startDate: node.startDate,
                ...(node.endDate && { endDate: node.endDate }),
              };

              const eventLocation = {
                location: node.eventLocation,
                ensemble: node.eventInformation.ensemble,
              };

              const image =
                node.eventImage && getImage(node.eventImage.gatsbyImageData);

              return (
                <Event
                  eventDates={eventDates}
                  eventTitle={node.eventTitle}
                  eventLocation={eventLocation}
                  performers={node.eventInformation.performers}
                  pieces={node.eventInformation.pieces}
                  eventUrl={node.eventUrl}
                  image={image}
                  isAssistant={node.isAssistant}
                  key={node.eventId}
                />
              );
            })
          : // pastevents
            pastEvents.map(({ node }: any) => {
              const eventDates = {
                startDate: node.startDate,
                ...(node.endDate && { endDate: node.endDate }),
              };

              const eventLocation = {
                location: node.eventLocation,
                ensemble: node.eventInformation.ensemble,
              };

              const image =
                node.eventImage && getImage(node.eventImage.gatsbyImageData);

              return (
                <Event
                  eventDates={eventDates}
                  eventTitle={node.eventTitle}
                  eventLocation={eventLocation}
                  performers={node.eventInformation.performers}
                  pieces={node.eventInformation.pieces}
                  eventUrl={node.eventUrl}
                  image={image}
                  isAssistant={node.isAssistant}
                  key={node.eventId}
                />
              );
            })}

        {/* <GatsbyImage
          image={backgroundImage!}
          alt={"Tristan Conducting"}
          sx={{
            position: "fixed",
            top: 0,
            right: [0, null, "-200px"],
            zIndex: -2,
            opacity: "0.25",
          }}
        /> */}
        {/* <div
          sx={{
            position: "fixed",
            top: 0,
            height: "1000px",
            width: "100%",
            zIndex: -1,
            background: `rgba(255, 255, 255, 0)
          linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0) 0%,
              rgb(255, 255, 255) 80%
          )
          repeat scroll 0 0;`,
          }}
        ></div> */}
      </div>
    </>
  );
};

export default Events;
