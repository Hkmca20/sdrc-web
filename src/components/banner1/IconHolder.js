import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ANIMATION_DURATION_S = 0.8;
const getVariants = (direction) => ({
  initial: {
    y: direction === "top" ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: ANIMATION_DURATION_S, ease: "easeInOut" },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: ANIMATION_DURATION_S, ease: "easeInOut" },
  },
});
const IconHolder = ({ icon, text }) => {
  return (
    <>
      {/* <div className="icon-holder">
        <div className="icon-holder__icon">
          <img src={icon.src} alt={icon.alt} />
        </div>
        <h1 className="icon-holder__text">{text}</h1>
      </div> */}
      <div className="icon-holder">
        <AnimatePresence>
          <motion.div
            className="icon-holder__icon"
            key={text + "icon"}
            variants={getVariants("top")}
            initial={{ y: "-100%", opacity: 0 }}
            exit={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: ANIMATION_DURATION_S, ease: "easeInOut" }}
          >
            <img src={icon.src} alt={icon.alt} />
          </motion.div>
          <motion.h1
            className="icon-holder__text"
            key={text}
            variants={getVariants("bottom")}
            initial={{ y: "100%", opacity: 0 }}
            exit={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: ANIMATION_DURATION_S, ease: "easeInOut" }}
          >
            {text}
          </motion.h1>
        </AnimatePresence>
      </div>
    </>
  )
}

export default IconHolder

