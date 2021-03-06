/** @jsx jsx */
import { jsx } from "theme-ui";

import React, { useState, useEffect, useRef } from "react";
import MobileNavOverlayHeader from "../../atoms/MobileNavOverlayHeader/MobileNavOverlayHeader";
import MobileNavOverlayLinks from "../../atoms/MobileNavOverlayLinks/MobileNavOverlayLinks";
import useLockBodyScroll from "../../../lib/hooks/useLockBodyScroll";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  isOpen: boolean;
  closeMenu: Function;
};

const MobileNavOverlay = ({ isOpen, closeMenu }: Props) => {
  const [shouldLockScroll, setShouldLockScroll] = useState(isOpen);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.height = "100vh";
    } else {
      document.body.style.height = "";
    }

    setShouldLockScroll(isOpen);
  }, [isOpen]);

  useLockBodyScroll(shouldLockScroll, wrapperRef.current);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            sx={{
              position: "fixed",
              left: 0,
              top: 0,
              bottom: 0,
              right: "40px",
              background: "rgba(49, 72, 94, 0.62)",
              backdropFilter: "blur(74px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 99,
            }}
            initial={{ x: -1500 }}
            animate={{ x: 0 }}
            exit={{ x: -1500 }}
            transition={{ duration: 1 }}
            ref={wrapperRef}
          >
            <MobileNavOverlayHeader closeMenu={closeMenu} />
            <MobileNavOverlayLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavOverlay;
