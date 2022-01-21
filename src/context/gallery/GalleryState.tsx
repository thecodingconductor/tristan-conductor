import React, { useReducer } from "react";

import GalleryContext from "./galleryContext";
import galleryReducer from "./galleryReducer";

import { SET_PHOTO, SET_VIDEO } from "../types";

const GalleryState = (props) => {
  const initialState = {
    gridMediaType: "photo",
  };

  const [state, dispatch] = useReducer(galleryReducer, initialState);

  const changeMediaType = (label: string) => {
    if (label.toLocaleLowerCase().trim() === state.gridMediaType) {
      return;
    }

    if (state.gridMediaType === "photo") {
      dispatch({
        type: SET_VIDEO,
      });
    } else if (state.gridMediaType === "video") {
      dispatch({
        type: SET_PHOTO,
      });
    }
  };

  return (
    <GalleryContext.Provider
      value={{
        gridMediaType: state.gridMediaType,
        changeMediaType,
      }}
    >
      {props.children}
    </GalleryContext.Provider>
  );
};

export default GalleryState;
