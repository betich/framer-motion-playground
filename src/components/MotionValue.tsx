"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function MotionValue() {
  const x = useMotionValue(0);
  const input = [-200, 0, 200]; // map the input range of (x)
  const output = [0, 1, 0]; // to the output range of (opacity) and (scale)

  const opacity = useTransform(x, input, output);
  const scale = useTransform(x, input, output);

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 rounded-xl border border-white/10 bg-zinc-700 px-10 py-16">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-sm font-bold">Motion values</h2>
        <a
          href="https://www.framer.com/motion/motionvalue/"
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
            Motion values
          </span>
          : track the state and velocity of animating values.
        </p>

        <p>
          Motion values can be created by using the{" "}
          <span className="rounded-md bg-white/20 px-2 py-1">
            useMotionValue
          </span>{" "}
          hook
        </p>

        <p>
          Motion values&apos; state change can be adjusted by using hooks like{" "}
          <span className="rounded-md bg-white/20 px-2 py-1">useSpring</span> or{" "}
          <span className="rounded-md bg-white/20 px-2 py-1">useTransform</span>
        </p>

        <p>
          Motion values can be used to animate any property of a component, not
          just CSS properties.
        </p>

        <p>
          Motion values can be used to create custom animations, like the
          following example.
        </p>
      </div>

      <p className="mt-4 text-sm">Drag the rectangle to see the animation</p>

      <motion.div
        drag="x"
        dragConstraints={{
          left: -100,
          right: 100,
        }}
        dragElastic={0.2}
        className="h-24 w-24 cursor-move rounded-lg bg-gradient-to-r from-blue-100 to-pink-200"
        style={{
          x,
          opacity,
          scale,
        }}
      />
    </div>
  );
}
