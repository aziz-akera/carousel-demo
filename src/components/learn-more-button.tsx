"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function LearnMoreButton() {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative flex items-center bg-white justify-between w-[220px] md:w-[280px] mx-auto h-[40px] md:h-[50px] cursor-pointer rounded-full px-4 md:px-6 py-2 font-medium text-zinc-800 "
    >
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-[70px] rounded-r-full pointer-events-none z-[1]"
        style={{
          background: "rgba(255,180,80,0.03)",
        }}
        variants={{
          rest: {
            boxShadow:
              "10px 0 20px rgba(255,149,0,0.2), 0 0 25px rgba(255,149,0,0.15)",
            opacity: 0.8,
          },
          hover: {
            boxShadow:
              "25px 0 35px rgba(255,149,0,0.4), 0 0 40px rgba(255,149,0,0.3)",
            opacity: 1,
            transition: { duration: 0.4 },
          },
        }}
      />

      <motion.div
        className="absolute right-0 inset-y-0 w-[50%] rounded-r-full pointer-events-none z-[1]"
        variants={{
          rest: {
            opacity: 0.4,
            boxShadow: "inset -10px 0 15px rgba(255,180,80,0.08)",
          },
          hover: {
            opacity: 1,
            boxShadow: "inset -15px 0 20px rgba(255,180,80,0.2)",
            transition: { duration: 0.3 },
          },
        }}
      />

      <motion.div
        className="absolute inset-0 rounded-full z-[5]"
        style={{
          background: "linear-gradient(90deg, #ffffff 60%, #ffe8cc 100%)",
        }}
        variants={{
          rest: {
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
          },
          hover: {
            boxShadow:
              "0 2px 10px rgba(0, 0, 0, 0.1), 0 0 30px 5px rgba(255,149,0,0.15)",
            transition: { duration: 0.4 },
          },
        }}
      />

      <div className="relative z-[10] flex items-center justify-between w-full">
        <span className="text-[17px] font-medium">Learn more</span>
        <motion.div
          variants={{
            hover: {
              x: 4,
              y: -2,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
              },
            },
          }}
        >
          <ArrowUpRight className="h-5 w-5 text-orange-500" />
        </motion.div>
      </div>
    </motion.button>
  );
}
