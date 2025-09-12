import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

export default function Footer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

    return (
        <div 
        ref={containerRef}
          className='relative h-[800px]'
          style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
          <div  className='fixed bottom-0 h-[800px] w-full'>
            <motion.div style={{y}} className='relative w-full h-full'>
                <Image src='https://cdn.pixabay.com/photo/2017/12/25/11/32/cat-3038243_1280.jpg' fill alt="image" style={{objectFit: "cover"}}/>
            </motion.div>
          </div>
        </div>
    )
}
