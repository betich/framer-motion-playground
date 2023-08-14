"use client";
import {
  motion,
  useDragControls,
  useMotionValue,
  useTransform,
} from "framer-motion";

export default function Drag() {
  const controls = useDragControls();
  const x = useMotionValue(0);

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 rounded-xl border border-white/10 bg-zinc-700 px-10 py-16">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-sm font-bold">Drag</h2>
        <a
          href="https://www.framer.com/motion/use-drag-controls/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline hover:no-underline"
        >
          Docs
        </a>
      </div>

      <div className="flex flex-col gap-2 text-sm leading-loose text-white">
        <p>
          Add the
          <span className="rounded-md bg-white/20 px-2 py-1">drag</span>
          prop to make an element draggable.
        </p>

        <p>
          <span className="rounded-md bg-white/20 px-2 py-1">
            useDragControls
          </span>
          : control the drag gesture.
        </p>

        <p>
          <span className="rounded-md bg-white/20 px-2 py-1">
            dragConstraints
          </span>
          : limit the drag gesture to a specific area.
        </p>

        <p>
          x and y values of the drag gesture can be used to animate other
          properties.
        </p>
      </div>

      <p className="mt-4 text-sm">
        Drag the rectangle (or drag the small circle)
      </p>

      <div className="flex justify-center gap-4">
        <div
          onPointerDown={(event) => {
            controls.start(event);
          }}
          style={{ touchAction: "none" }}
          className="h-6 w-6 cursor-move rounded-full bg-gradient-to-r from-blue-100 to-pink-200"
        />

        <div
          onPointerDown={(event) => {
            controls.start(event, { snapToCursor: true });
          }}
          style={{ touchAction: "none" }}
          className="h-6 w-6 cursor-move rounded-full bg-gradient-to-r from-blue-100 to-pink-200"
        />
      </div>

      <motion.div
        drag
        dragControls={controls}
        dragConstraints={{
          left: -50,
          right: 50,
          top: -50,
          bottom: 50,
        }}
        style={{
          x,
        }}
        dragElastic={0.2}
        // dragListener={false} // disable drag gesture
        className="h-24 w-24 cursor-move rounded-lg bg-gradient-to-r from-blue-100 to-pink-200"
      />
    </div>
  );
}
