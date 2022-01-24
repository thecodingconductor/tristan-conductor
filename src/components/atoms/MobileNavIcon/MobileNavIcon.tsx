/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import * as PropTypes from "prop-types";
import React, { useContext } from "react";
import { resetButton } from "../../../lib/utils/mixins";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  closeMenu: Function;
  openMenu: Function;
  isSideNavVisible: boolean;
  isOpen: boolean;
};

const MobileNavIcon = ({
  closeMenu,
  openMenu,
  isSideNavVisible,
  isOpen,
}: Props) => {
  const menuToggle = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isSideNavVisible && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            sx={{
              height: "43px",
              width: "88px",
              background: "white",
              position: "fixed",
              zIndex: 100,
              top: "30px",
              left: 0,
            }}
          >
            <button
              sx={{
                ...resetButton,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "100%",
              }}
              onClick={menuToggle}
            >
              <Themed.h1
                sx={{
                  color: "black",
                  fontSize: "21px",
                }}
              >
                T R - S
              </Themed.h1>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavIcon;
