"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Lenis from "lenis";

export default function PerspectiveSectionTransition() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    const lenis = new Lenis({});

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
      <div className="h-screen bg-black"></div>
    </main>
  );
}

const Section1 = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="h-screen bg-[#C72626] sticky top-0 text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
    >
      <p>Scroll Perspective</p>
      <div className="flex gap-4">
        <p>Section</p>
        <div className="relative w-[12.5vw]">
          <Image
            src="https://cdn.pixabay.com/photo/2020/02/03/17/39/beach-4816249_1280.jpg"
            alt="img"
            placeholder="blur"
            fill
            blurDataURL="https://cdn.pixabay.com/photo/2020/02/03/17/39/beach-4816249_1280.jpg"
          />
        </div>
        <p>Transition</p>
      </div>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
      <Image
        src="https://cdn.pixabay.com/photo/2017/08/01/01/17/beach-2562563_1280.jpg"
        alt="img"
        placeholder="blur"
        blurDataURL="https://cdn.pixabay.com/photo/2017/08/01/01/17/beach-2562563_1280.jpg"
        fill
      />
    </motion.div>
  );
};
