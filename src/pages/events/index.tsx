/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Event from "../../components/molecules/Event/Event";
import Divider from "../../components/atoms/Divider/Divider";
import GlobalContext from "../../context/global/globalContext";
import HeaderComponent from "../../components/atoms/HeaderComponent/HeaderComponent";

const Events = () => {
  const globalContext = useContext(GlobalContext);
  const {
    closeMenu,
    openMenu,
    isSideNavVisible,
    isOpen,
    showSideNav,
    hideSideNav,
  } = globalContext!.menu;

  const data = useStaticQuery(graphql`
    query {
      allContentfulEvents(sort: { fields: startDate, order: DESC }) {
        edges {
          node {
            startDate(formatString: "MM.DD.YYYY")

            endDate(formatString: "MM.DD.YYYY")
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
          }
        }
      }
    }
  `);

  useEffect(() => {
    isOpen && closeMenu!();
    hideSideNav!();
  }, []);

  console.log(data.allContentfulEvents.edges);

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
        {data.allContentfulEvents.edges.map(({ node }) => {
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

          console.log(eventDates);

          return (
            <Event
              eventDates={eventDates}
              eventTitle={node.eventTitle}
              eventLocation={eventLocation}
              performers={node.eventInformation.performers}
              pieces={node.eventInformation.pieces}
              image={image}
              key={node.eventId}
            />
          );
        })}
        <Divider />
      </div>
    </>
  );
};

export default Events;
