import {
  OPEN_MENU,
  CLOSE_MENU,
  SHOW_SIDE_NAV,
  HIDE_SIDE_NAV,
  SET_VIDEO,
  SET_PHOTO,
  SUBMIT_FORM,
  OPEN_IMAGE_DETAIL,
  CLOSE_IMAGE_DETAIL,
  SET_CURRENT_PAGE,
  SHOW_PAST_EVENTS,
  SHOW_UPCOMING_EVENTS,
  SORT_EVENTS,
  EVENTS_SORTED,
} from "../types";

const globalReducer = (state, action) => {
  switch (action.type) {
    // GALLERY
    case SET_PHOTO:
      return {
        ...state,
        gallery: {
          ...state.gallery,
          gridMediaType: "photo",
        },
      };
    case SET_VIDEO:
      return {
        ...state,
        gallery: {
          ...state.gallery,
          gridMediaType: "video",
        },
      };
    case OPEN_IMAGE_DETAIL:
      return {
        ...state,
        gallery: {
          ...state.gallery,
          showImageDetail: true,
          currentImage: action.payload,
        },
      };
    case CLOSE_IMAGE_DETAIL:
      return {
        ...state,
        gallery: {
          ...state.gallery,
          showImageDetail: false,
          currentImage: null,
        },
      };
    // MENU
    case OPEN_MENU:
      return {
        ...state,
        menu: {
          ...state.menu,
          isOpen: true,
        },
      };
    case CLOSE_MENU:
      return {
        ...state,
        menu: {
          ...state.menu,
          isOpen: false,
        },
      };
    case SHOW_SIDE_NAV:
      return {
        ...state,
        menu: {
          ...state.menu,
          isSideNavVisible: true,
        },
      };
    case HIDE_SIDE_NAV:
      return {
        ...state,
        menu: {
          ...state.menu,
          isSideNavVisible: false,
        },
      };
    // FORM
    case SUBMIT_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          isSubmitted: true,
        },
      };
    // LOCATION
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: {
          ...state.currentPage,
          currentPage: action.payload,
        },
      };
    // EVENTS
    case SHOW_PAST_EVENTS:
      return {
        ...state,
        events: {
          ...state.events,
          eventType: "past",
        },
      };

    case SHOW_UPCOMING_EVENTS:
      return {
        ...state,
        events: {
          ...state.events,
          eventType: "upcoming",
        },
      };
    case SORT_EVENTS:
      return {
        ...state,
        events: {
          ...state.events,
          upcomingEvents: action.payload.upcomingEvents.filter(
            (event: any) => event
          ),
          pastEvents: action.payload.pastEvents
            .filter((event: any) => event)
            .sort(
              (a: any, b: any) =>
                new Date(b.node.startDate).getTime() -
                new Date(a.node.startDate).getTime()
            ),
        },
      };

    case EVENTS_SORTED:
      return {
        ...state,
        events: {
          ...state.events,
          upcomingEvents: action.payload.upcomingEvents,
          pastEvents: action.payload.pastEvents,
        },
      };
    default:
      return state;
  }
};

export default globalReducer;
