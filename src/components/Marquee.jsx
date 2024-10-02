import { motion } from "framer-motion";
import React from "react";

const Marquee = ({ imagesurls, direction }) => {
  return (
    <div className="w-full flex overflow-hidden ">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex  flex-shrink-0 gap-20 py-8 pr-40"
      >
        {imagesurls.map((url, index) => (
          <img className="w-[8rem]" key={index} src={url} alt="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex  flex-shrink-0 gap-20 py-8 pr-40"
      >
        {imagesurls.map((url, index) => (
          <img className="w-[8rem]" key={index} src={url} alt="" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
