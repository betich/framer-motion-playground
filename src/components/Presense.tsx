"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Presense() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 rounded-xl border border-white/10 bg-zinc-700 px-10 py-16">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-sm font-bold">Presense</h2>
        <a
          href="https://www.framer.com/motion/animate-presence/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline hover:no-underline"
        >
          Docs
        </a>
      </div>

      <div className="flex flex-col gap-2 text-sm leading-loose text-white">
        <p>
          <span className="rounded-md bg-white/20 px-2 py-1">
            AnimatePresense
          </span>
          : a component that allows us to animate elements that are being added
          or removed from the DOM. Framer Motion will automatically detect and
          interpolate the changes between the old and new elements.
        </p>
      </div>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
        className="rounded-lg bg-white/25 px-6 py-3 transition-all duration-500 hover:bg-white/50"
      >
        {toggle ? "Hide" : "Show"}
      </button>

      <AnimatePresence>
        <motion.div
          className="h-24 w-24 rounded-lg bg-gradient-to-r from-blue-100 to-pink-200"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
            },
            hidden: {
              opacity: 0,
              scale: 0,
            },
          }}
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.4,
          }}
        />
      </AnimatePresence>
    </div>
  );
}
