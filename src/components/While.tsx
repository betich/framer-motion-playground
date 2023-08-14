"use client";
import { motion } from "framer-motion";

export default function While() {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 rounded-xl border border-white/10 bg-zinc-700 px-10 py-16">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-sm font-bold">Gestures</h2>
        <a
          href="https://www.framer.com/motion/gestures/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline hover:no-underline"
        >
          Docs
        </a>
      </div>

      <div className="flex flex-col gap-2 text-sm leading-loose text-white">
        <p>
          <span className="rounded-md bg-white/20 px-2 py-1">whileHover</span>:
          the state of our element when the mouse is hovering over it.
        </p>
        <p>
          <span className="rounded-md bg-white/20 px-2 py-1">whileTap</span>:
          the state of our element when the mouse is clicking on it.
        </p>
      </div>

      <motion.div
        className="h-24 w-24 rounded-lg bg-gradient-to-r from-blue-100 to-pink-200"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{
          scale: 0.1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 0.4,
        }}
      />
    </div>
  );
}
