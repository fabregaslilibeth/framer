"use client";

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import React, { useRef } from 'react';

export default function Paragraph({paragraph = ""}: {paragraph?: string}) {

    if(!paragraph) {
        paragraph = "The quick brown fox jumps over the lazy dog and the lazy dog jumps over the quick brown fox because the quick brown fox is lazy and the lazy dog is quick";
    };
    
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "start 0.25"]
  })

  const words = paragraph.split(" ")

  return (
    <p 
      ref={container}         
      className="text-lg leading-relaxed max-w-96 mx-auto px-4 mt-[80vh] text-xl font-extrabold text-red-500 flex flex-wrap"
    >
    {
      words.map( (word, i) => {
        const start = i / words.length
        const end = start + (1 / words.length)
        return (
          <React.Fragment key={i}>
            <Word progress={scrollYProgress} range={[start, end]} perCharacter={true}>{word}</Word>
            {i < words.length - 1 && <span className="inline-block w-1"></span>}
          </React.Fragment>
        )
      })
    }
    <div className='h-screen'></div>
    </p>
  )
}

const Word = ({children, progress, range, perCharacter = false}: {children: React.ReactNode, progress: MotionValue<number>, range: number[], perCharacter?: boolean}) => {
    const opacity = useTransform(progress, range, [0, 1])

    if (!children || typeof children !== "string") return;

    if (!perCharacter) {
        return (
          <span className="relative inline-block mr-2 text-green-400">
            <span className="absolute inset-0 text-gray-400">{children}</span>
            <motion.span style={{opacity: opacity}} className="relative">{children}</motion.span>
          </span>
        )
    }

    const amount = range[1] - range[0]
    const step = amount / children.length

     return (
       <span className="word">
         {
           children.split("").map((char, i) => {
             const start = range[0] + (i * step);
             const end = range[0] + ((i + 1) * step)
             return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char === " " ? "\u00A0" : char}</Char>
           })
         }
       </span>
   
     )
    
  }

const Char = ({children, progress, range}) => {
    const opacity = useTransform(progress, range, [.2,1])
    return (
        <span className='text-gray-400'>
            <span className="absolute inset-0">{children}</span>
            <motion.span style={{opacity: opacity}}>{children}</motion.span>
        </span>
    )
}