"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LearnMoreButton } from "./learn-more-button";
const panels = [
  {
    id: "01",
    title: "Website Design",
    description:
      "We build responsive website for creator-led info products that stand the test of time and also converts.",
    image: "/images/website-design.webp",
  },
  {
    id: "02",
    title: "Product Design",
    description:
      "We create intuitive digital products with user-centered design principles that delight your customers.",
    image: "/images/website-design.webp",
  },
  {
    id: "03",
    title: "Full Stack",
    description:
      "We develop robust applications with modern technologies that scale with your business needs.",
    image: "/images/website-design.webp",
  },
];

export default function Carousel() {
  const [activePanel, setActivePanel] = useState(0);

  return (
    <div className="flex h-[600px] w-full max-w-4xl overflow-hidden rounded-lg">
      {panels.map((panel, index) => {
        const isActive = activePanel === index;

        return (
          <motion.div
            key={panel.id}
            className={`relative flex h-full cursor-pointer overflow-hidden mr-2 rounded-lg transition-colors duration-300`}
            layout
            initial={false}
            animate={{
              flex: isActive ? 5 : 0.5,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
            onClick={() => setActivePanel(index)}
            whileHover={!isActive ? { flex: 0.8 } : {}}
            style={{
              isolation: "isolate",
              overflow: "hidden",
            }}
          >
            <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
              <Image
                src={panel.image}
                alt={panel.title}
                fill
                className={`object-cover transition-all duration-500 rounded-lg ${
                  !isActive ? "brightness-[0.4]" : ""
                }`}
                priority
              />

              {isActive && (
                <div className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
                    style={{
                      backdropFilter: "blur(3px)",
                      WebkitBackdropFilter: "blur(3px)",
                      maskImage:
                        "linear-gradient(to top, black 20%, transparent 80%)",
                      WebkitMaskImage:
                        "linear-gradient(to top, black 20%, transparent 80%)",
                      borderRadius: "inherit",
                    }}
                  ></div>
                </div>
              )}

              <div
                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"
                style={{ borderRadius: "inherit" }}
              ></div>
            </div>

            {!isActive && (
              <>
                <div className="absolute inset-0 z-5 flex flex-col items-center">
                  <div className="h-1/3 w-px bg-white/50 mt-8"></div>
                </div>
                <motion.div
                  className={`absolute inset-0 z-10 flex items-end justify-center pb-20 text-white`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="-rotate-90 text-lg font-bold whitespace-nowrap">
                    {panel.title}
                  </div>
                </motion.div>
              </>
            )}

            <AnimatePresence>
              {isActive && (
                <motion.div
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ borderRadius: "inherit" }}
                >
                  <div className="text-5xl font-bold text-white mb-4">
                    {panel.id}
                  </div>

                  <div className="max-w-md text-center mt-auto mb-8 z-20">
                    <h2 className={`mb-4 text-4xl font-semibold text-white`}>
                      {panel.title}
                    </h2>
                    <p className={`mb-6 text-sm text-white`}>
                      {panel.description}
                    </p>

                    <LearnMoreButton />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
