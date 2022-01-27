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
} from "../types";
import { ImageDataLike } from "gatsby-plugin-image";

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

  const selectImage = (image: ImageDataLike) => {
    dispatch({
      type: OPEN_IMAGE_DETAIL,
      payload: image,
    });
  };

  const closeImage = () => {
    dispatch({
      type: CLOSE_IMAGE_DETAIL,
    });
  };

  const setCurrentImage = (image: ImageDataLike) => {
    console.log("set current image");
    dispatch({
      type: SET_CURRENT_IMAGE,
      payload: image,
    });
  };

  // FORM
  const onSubmit = () => {
    console.log("form submitted");
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
