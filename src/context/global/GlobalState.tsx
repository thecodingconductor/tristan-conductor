import React, { useReducer, ReactNode } from "react";
import GlobalContext from "./globalContext";
import globalReducer from "./globalReducer";

import {
  OPEN_MENU,
  CLOSE_MENU,
  SHOW_SIDE_NAV,
  HIDE_SIDE_NAV,
  SET_PHOTO,
  SET_VIDEO,
  SET_CURRENT_IMAGE,
  OPEN_IMAGE_DETAIL,
  CLOSE_IMAGE_DETAIL,
  SET_CURRENT_PAGE,
  SHOW_PAST_EVENTS,
  SHOW_UPCOMING_EVENTS,
  SORT_EVENTS,
  EVENTS_SORTED,
} from "../types";
import { ImageDataLike } from "gatsby-plugin-image";
// import { isDateInPast } from "../../lib/utils/helpers";

type Props = {
  children: ReactNode;
};

const GlobalState = ({ children }: Props) => {
  const initialState = {
    gallery: {
      gridMediaType: "photo",
      showImageDetail: false,
      currentImage: null,
    },
    menu: {
      isOpen: false,
      isSideNavVisible: false,
    },
    form: {
      isSubmitted: false,
    },
    currentPage: {
      currentPage: null,
    },
    events: {
      eventType: "upcoming",
      upcomingEvents: [],
      pastEvents: [],
    },
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);
  // MENU
  const openMenu = () => {
    dispatch({
      type: OPEN_MENU,
    });
  };

  const closeMenu = () => {
    dispatch({
      type: CLOSE_MENU,
    });
  };

  const showSideNav = () => {
    dispatch({
      type: SHOW_SIDE_NAV,
    });
  };

  const hideSideNav = () => {
    dispatch({
      type: HIDE_SIDE_NAV,
    });
  };

  // GALLERY

  // Show Photos or Videos
  const setPhoto = () => {
    dispatch({
      type: SET_PHOTO,
    });
  };

  const setVideo = () => {
    dispatch({
      type: SET_VIDEO,
    });
  };

  const selectImage = (image: ImageDataLike, photoCredit: string) => {
    dispatch({
      type: OPEN_IMAGE_DETAIL,
      payload: {
        image,
        photoCredit,
      },
    });
  };

  const closeImage = () => {
    dispatch({
      type: CLOSE_IMAGE_DETAIL,
    });
  };

  const setCurrentImage = (image: ImageDataLike) => {
    dispatch({
      type: SET_CURRENT_IMAGE,
      payload: image,
    });
  };

  // FORM
  const onSubmit = () => {
    console.log("form submitted");
  };

  // Location handler
  const setCurrentPage = (currentPage: string) => {
    dispatch({
      type: SET_CURRENT_PAGE,
      payload: currentPage,
    });
  };

  // EVENTS

  const showPastEvents = () => {
    dispatch({
      type: SHOW_PAST_EVENTS,
    });
  };

  const showUpcomingEvents = () => {
    dispatch({
      type: SHOW_UPCOMING_EVENTS,
    });
  };

  // const sortEvents = (events: Array<any>) => {
  //   const upcomingEvents = events.map((event) =>
  //     !isDateInPast(new Date(event.node.startDate)) ? event : null
  //   );

  //   const pastEvents = events.map((event) =>
  //     isDateInPast(new Date(event.node.startDate)) ? event : null
  //   );

  //   dispatch({
  //     type: SORT_EVENTS,
  //     payload: {
  //       upcomingEvents,
  //       pastEvents,
  //     },
  //   });

  const eventsSorted = ({ upcomingEvents, pastEvents }: any) => {
    dispatch({
      type: EVENTS_SORTED,
      payload: {
        upcomingEvents,
        pastEvents,
      },
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        gallery: {
          gridMediaType: state.gallery.gridMediaType,
          currentImage: state.gallery.currentImage,
          setPhoto,
          setVideo,
          showImageDetail: state.gallery.showImageDetail,
          selectImage,
          closeImage,
          setCurrentImage,
        },
        menu: {
          isOpen: state.menu.isOpen,
          isSideNavVisible: state.menu.isSideNavVisible,
          openMenu,
          closeMenu,
          showSideNav,
          hideSideNav,
        },
        form: {
          isSubmitted: state.form.isSubmitted,
          onSubmit,
        },
        currentPage: {
          currentPage: state.currentPage.currentPage,
          setCurrentPage,
        },
        events: {
          eventType: state.events.eventType,
          showPastEvents,
          showUpcomingEvents,
          upcomingEvents: state.events.upcomingEvents,
          pastEvents: state.events.pastEvents,
          // sortEvents,
          eventsSorted,
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
