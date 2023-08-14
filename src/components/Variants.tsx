"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Variants() {
  const [toggledState, setToggledState] = useState<number>(1);

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 rounded-xl border border-white/10 bg-zinc-700 px-10 py-16">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-sm font-bold">Variants</h2>
        <a
          href="https://www.framer.com/motion/animation/#variants"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline hover:no-underline"
        >
          Docs
        </a>
      </div>

      <div className="flex flex-col gap-2 text-sm leading-loose text-white">
        <p>
          Instead of{" "}
          <span className="rounded-md bg-white/20 px-2 py-1">initial</span> and{" "}
          <span className="rounded-md bg-white/20 px-2 py-1">animate</span>, we
          can use{" "}
          <span className="rounded-md bg-white/20 px-2 py-1">variants</span> to
          define different states for our element.
        </p>
      </div>

      <button
        onClick={() => {
          setToggledState(toggledState === 9 ? 1 : toggledState + 1);
        }}
        className="rounded-lg bg-white/25 px-6 py-3 transition-all duration-500 hover:bg-white/50"
      >
        Toggle
      </button>

      <motion.div
        className="h-24 w-24 rounded-lg bg-gradient-to-r from-blue-100 to-pink-200"
        variants={{
          "1": {
            rotate: 0,
          },
          "2": {
            rotate: 45,
          },
          "3": {
            rotate: 90,
          },
          "4": {
            rotate: 135,
          },
          "5": {
            rotate: 180,
          },
          "6": {
            rotate: 225,
          },
          "7": {
            rotate: 270,
          },
          "8": {
            rotate: 315,
          },
          "9": {
            rotate: 360,
          },
        }}
        initial={"1"}
        animate={String(toggledState)}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.4,
        }}
      />
    </div>
  );
}
