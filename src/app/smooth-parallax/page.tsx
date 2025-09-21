"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "lenis";
import { MotionValue, useScroll, useTransform, motion } from "framer-motion";

const images = [
  "https://cdn.pixabay.com/photo/2017/09/25/19/11/chicken-liver-2786322_640.jpg",
  "https://cdn.pixabay.com/photo/2014/11/05/15/57/new-years-eve-518032_640.jpg",
  "https://cdn.pixabay.com/photo/2017/09/25/19/11/chicken-liver-2786322_640.jpg",
  "https://cdn.pixabay.com/photo/2014/11/05/15/57/new-years-eve-518032_640.jpg",
  "https://cdn.pixabay.com/photo/2017/09/25/19/11/chicken-liver-2786322_640.jpg",
  "https://cdn.pixabay.com/photo/2014/11/05/15/57/new-years-eve-518032_640.jpg",
  "https://cdn.pixabay.com/photo/2017/09/25/19/11/chicken-liver-2786322_640.jpg",
  "https://cdn.pixabay.com/photo/2014/11/05/15/57/new-years-eve-518032_640.jpg",
  "https://cdn.pixabay.com/photo/2017/09/25/19/11/chicken-liver-2786322_640.jpg",
  "https://cdn.pixabay.com/photo/2014/11/05/15/57/new-years-eve-518032_640.jpg",
  "https://cdn.pixabay.com/photo/2017/09/25/19/11/chicken-liver-2786322_640.jpg",
  "https://cdn.pixabay.com/photo/2014/11/05/15/57/new-years-eve-518032_640.jpg",
];

export default function Home() {
  const gallery = useRef(null);

  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const lenis = new Lenis();

    const resize = () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }
    
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize()

    return () => {
       window.removeEventListener("resize", resize);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <main className="main">
      <div className="spacer h-screen"></div>
      <div ref={gallery} className="gallery h-screen lg:h-[175vh] bg-black relative flex gap-[2vw] p-[2vw] overflow-hidden">
        <div className="relative top-[-12vh] h-[200vh] w-full flex gap-[2vw] p-[2vw]">
          <Column images={[images[0], images[1], images[2]]} y={y} top={'-30%'} />
          <Column images={[images[3], images[4], images[5]]} y={y2} top={'-70%'} />
          <Column images={[images[6], images[7], images[8]]} y={y3} top={'-30%'} />
          <Column images={[images[9], images[10], images[11]]} y={y4} top={'-60%'} />
        </div>
      </div>
      <div className="spacer h-screen"></div>
    </main>
  );
}

const Column = ({ images, y, top }: { images: string[], y: MotionValue<number>, top: string }) => {
  return (
    <motion.div className="relative h-full w-1/4 min-w-[250px] flex flex-col gap-[2vw]"
    style={{y, top}}
    >
      {images.map((src, i) => {
        return (
          <div key={i} className="h-full w-full relative rounded-[2px] overflow-hidden">
            <Image src={src} alt="image" fill style={{objectFit: 'cover'}} />
          </div>
        );
      })}
    </motion.div>
  );
};
