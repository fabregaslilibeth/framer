'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { useRef, useEffect } from 'react';

const phrases = [
  "It is a long established fact",
  "that a reader will be distracted",
  "by the readable content of a page",
  "when looking at its layout."
]

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

}, []);
  return (
    <div className="flex flex-col items-center my-[600px] gap-10">
      <MaskText/>
      <MaskText/>
      <MaskText/>
      <MaskText/>
      <MaskText/>
    </div>
  )
}

export function MaskText() {
  const body = useRef(null);

  const { scrollYProgress } = useScroll({
    target: body,
    offset: ["start 0.85", "end 0.85"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  
  return(
    <div ref={body} className='my-[300px]'>
      {
        phrases.map( (phrase, index) => {
          return <div key={index} className='overflow-hidden m-0 font-extrabold text-4xl'>
            <motion.p 
              style={{ y }} 
              transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * index }}
            >
              {phrase}
            </motion.p>
          </div>
        })
      }
    </div>
  )
}
