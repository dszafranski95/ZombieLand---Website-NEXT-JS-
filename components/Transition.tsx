"use client";

import React from "react";
import { motion } from "framer-motion";

const TransitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
    rotate: "0deg",
  },
  animate: {
    x: "0%",
    width: "0%",
    rotate: "5deg",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
    rotate: "0deg",
  },
};

const Transition = () => {
  return (
    <div>
      <motion.div
        className="fixed top-0 bottom-0 h-screen w-screen right-full z-[30] bg-[#8B0000]" // Deep blood red
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 h-screen w-screen right-full z-[20] bg-[#640000]" // Darker shade of red
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 h-screen w-screen right-full z-[10] bg-[#450000]" // Even darker shade of red
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Transition;
