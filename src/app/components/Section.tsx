import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Section() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);
    
    return (
        <div
            ref={containerRef} 
            className='relative flex items-center justify-center h-screen overflow-hidden'
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
        <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
            <p className='w-[50vw] text-[2vw] self-end uppercase mix-blend-difference'>Beauty and quality need the right time to be conceived and realised even in a world that is in too much of a hurry.</p>
            <p className='text-[5vw] uppercase mix-blend-difference'>Background Parallax</p>
        </div>
        <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
            <motion.div style={{y}} className='relative w-full h-full'>
                <Image src='https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg' fill alt="image" style={{objectFit: "cover"}}/>
            </motion.div>
        </div>
        </div>
    );
}