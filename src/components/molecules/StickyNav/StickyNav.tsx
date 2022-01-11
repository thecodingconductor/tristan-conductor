/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import {
  AnimationControls,
  motion,
  Target,
  TargetAndTransition,
  Transition,
  VariantLabels,
} from "framer-motion";
import * as PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";

const propTypesShape = {
  contentNode: PropTypes.element.isRequired,
  /**
   * If enabled, the nav is normally invisible, and only appears when it is scrolled to or past.
   */
  appearOnScroll: PropTypes.bool,
  /**
   * If `appearOnScroll` is true, the nav will become visible in between the nav's natural position and the lower edge of this element. In most cases, this element will be a parent of the nav. If not provided, the nav is visibile anywhere on the page below its natural position. Has no effect if the lower edge of this element is above the top of the nav's natural position, or if `appearOnScroll` is not true.
   */
  parentRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.node }),
  ]),
};

type Props = PropTypes.InferProps<typeof propTypesShape>;

interface AnimationOptions {
  initial: boolean | Target | VariantLabels;
  animate: AnimationControls | TargetAndTransition | VariantLabels | boolean;
  transition: Transition;
}

const getLowerEdgePosition = (ref) =>
  ref.current.getBoundingClientRect().y +
  ref.current.getBoundingClientRect().height;

const belowUpperBound = (wrapperRef) =>
  wrapperRef.current.getBoundingClientRect().y <= 0;
const aboveLowerBound = (parentRef, navRef) =>
  getLowerEdgePosition(parentRef) -
    navRef.current.getBoundingClientRect().height >
  0;

const StickyNav = ({ contentNode, appearOnScroll, parentRef }: Props) => {
  const wrapperRef = useRef(null);
  const navRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const showHideNav = () => {
    // if no parent ref has been provided, only measure from the wrapper ref.
    if (!parentRef) {
      setIsVisible(belowUpperBound(wrapperRef));
      return;
    }
    // if the parent ref ends above the wrapper ref on the page, only measure from the wrapper ref.
    if (getLowerEdgePosition(parentRef) < getLowerEdgePosition(wrapperRef)) {
      setIsVisible(belowUpperBound(wrapperRef));
      return;
    }
    // otherwise, measure between the top of the wrapper and the bottom of the parent.
    setIsVisible(
      belowUpperBound(wrapperRef) && aboveLowerBound(parentRef, navRef)
    );
  };

  //   function getAnimations(): AnimationOptions {
  //     if (!appearOnScroll) {
  //       return;
  //     }
  //     return {
  //       initial: false,
  //       animate: {
  //         transform: isVisible ? "translateY(0%)" : "translateY(-100%)",
  //         visibility: isVisible ? "visible" : "hidden",
  //         position: isVisible ? "fixed" : "static",
  //       },
  //       transition: {
  //         transform: {
  //           duration: theme.timing.opacity,
  //           ease: theme.easing.stickyNav,
  //         },
  //         visibility: { delay: isVisible ? 0 : theme.timing.opacity },
  //         position: { delay: isVisible ? 0 : theme.timing.opacity },
  //       },
  //     };
  //   }

  return (
    <div
      sx={{
        height: "43px",
        width: "88px",
        background: "white",
      }}
    >
      <Themed.h1>TRS</Themed.h1>
    </div>
  );
};

export default StickyNav;
