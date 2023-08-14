"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Stagger() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 rounded-xl border border-white/10 bg-zinc-700 px-10 py-16">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-sm font-bold">Stagger</h2>
        <a
          href="https://www.framer.com/motion/stagger/"
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
            staggerChildren
          </span>
          : a prop that allows us to stagger the children of a container.
        </p>
      </div>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
        className="rounded-lg bg-white/25 px-6 py-3 transition-all duration-500 hover:bg-white/50"
      >
        Toggle
      </button>

      <motion.ol
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.5,
            },
          },
        }}
        initial="hidden"
        animate={toggle ? "show" : "hidden"}
        className="flex flex-col gap-4"
      >
        <motion.li className="rounded-lg bg-white/20 p-4" variants={item}>
          Hi
        </motion.li>
        <motion.li className="rounded-lg bg-white/20 p-4" variants={item}>
          Hi
        </motion.li>
      </motion.ol>
    </div>
  );
}
