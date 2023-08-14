"use client";
import { motion } from "framer-motion";

export default function Basics() {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 rounded-xl border border-white/10 bg-zinc-700 px-10 py-16">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-sm font-bold">Basics</h2>
        <a
          href="https://www.framer.com/motion/animation/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline hover:no-underline"
        >
          Docs
        </a>
      </div>

      <div className="flex flex-col gap-2 text-sm leading-loose text-white">
        <p>
          <span className="rounded-md bg-white/20 px-2 py-1">initial</span>: the
          state of our element at mount time.
        </p>
        <p>
          <span className="rounded-md bg-white/20 px-2 py-1">animate</span>: the
          state in which our element will be at the end of the animation.
        </p>
        <p>
          <span className="rounded-md bg-white/20 px-2 py-1">transition</span>:
          how our element goes from the initial state to the target state. This
          is where we can define which transition type we want to define,
          delays, or repetitions of the same transition.
        </p>
      </div>

      <motion.div
        className="h-24 w-24 rounded-lg bg-gradient-to-r from-blue-100 to-pink-200"
        initial={{
          x: -100,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 100,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1,
        }}
      />
    </div>
  );
}
