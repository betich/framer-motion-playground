"use client";
import Basics from "@/components/Basics";
import Drag from "@/components/Drag";
import InView from "@/components/InView";
import MotionValue from "@/components/MotionValue";
import Presense from "@/components/Presense";
import Stagger from "@/components/Stagger";
import Variants from "@/components/Variants";
import While from "@/components/While";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-900 p-24 font-mono text-white">
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.6,
        }}
        className="z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6"
      >
        <h1 className="text-lg font-bold">Framer Motion Playground</h1>

        <div className="grid w-full grid-cols-2 gap-4">
          <Basics />
          <While />
          <Variants />
          <InView />
          <Presense />
          <Stagger />
          <MotionValue />
          <Drag />
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.6,
        }}
        className="z-10 mx-auto mt-14 flex w-full max-w-4xl flex-col items-center gap-6"
      >
        <h1 className="text-lg font-bold">Learning Resources</h1>

        <a
          href="https://www.framer.com/api/motion/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <div className="group flex flex-col gap-2 rounded-lg bg-white/20 px-10 py-6 text-sm leading-loose transition-all duration-500 hover:bg-white/30">
            <p className="text-bold text-lg">
              Framer Motion API : the official documentation for Framer Motion.
            </p>

            <p className="text-sm underline group-hover:no-underline">
              framer.com/api/motion/
            </p>
          </div>
        </a>

        <a
          href="https://blog.maximeheckel.com/posts/guide-animations-spark-joy-framer-motion/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <div className="group flex flex-col gap-2 rounded-lg bg-white/20 px-10 py-6 text-sm leading-loose transition-all duration-500 hover:bg-white/30">
            <p className="text-bold text-lg">
              Guide to creating animations that spark joy with Framer Motion
            </p>

            <p className="text-sm underline group-hover:no-underline">
              blog.maximeheckel.com
            </p>
          </div>
        </a>

        <a
          href="https://www.youtube.com/watch?v=fmgh4QbpK_w"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <div className="group flex flex-col gap-2 rounded-lg bg-white/20 px-10 py-6 text-sm leading-loose transition-all duration-500 hover:bg-white/30">
            <p className="text-bold text-lg">
              Satisfying Scroll Animations with Framer Motion
            </p>

            <p className="text-sm underline group-hover:no-underline">
              youtube.com
            </p>
          </div>
        </a>

        <a
          href="https://www.framer.com/motion/examples/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <div className="group flex flex-col gap-2 rounded-lg bg-white/20 px-10 py-6 text-sm leading-loose transition-all duration-500 hover:bg-white/30">
            <p className="text-bold text-lg">Framer Motion Examples</p>

            <p className="text-sm underline group-hover:no-underline">
              framer.com/motion/examples/
            </p>
          </div>
        </a>
      </motion.div>
    </main>
  );
}
