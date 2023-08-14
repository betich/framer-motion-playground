"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function InView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const inView = useInView(elementRef, {
    root: containerRef,
  });

  return (
    <div className="gap-6s mx-auto flex w-full flex-col items-center justify-center rounded-xl border border-white/10 bg-zinc-700 px-10 py-16">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-sm font-bold">InView</h2>
        <a
          href="https://www.framer.com/motion/in-view/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline hover:no-underline"
        >
          Docs
        </a>
      </div>

      <div className="flex flex-col gap-2 text-sm leading-loose text-white">
        <p>
          <span className="rounded-md bg-white/20 px-2 py-1">useInView</span>: a
          hook that returns a boolean value indicating whether the element is
        </p>

        <p>
          <span className="rounded-md bg-white/20 px-2 py-1">whileInView</span>:
          a prop that allows us to animate elements while they are in view.
        </p>
      </div>

      <p className="mt-6">inView? {String(Boolean(inView))}</p>

      <div className="mt-4 h-32 overflow-y-scroll" ref={containerRef}>
        <p className="pb-48">scroll down</p>

        <motion.div
          className="h-24 w-24 rounded-lg bg-gradient-to-r from-blue-100 to-pink-200"
          ref={elementRef}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.4,
          }}
        />
      </div>
    </div>
  );
}
