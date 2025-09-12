import { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

export default function BackgroundImageParallax() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden">
        <motion.div style={{ y }} className="relative h-full">
            <Image src="https://cdn.pixabay.com/photo/2023/03/25/21/48/cat-7876974_1280.jpg" fill alt="Background" style={{ objectFit: "cover" }} />
        </motion.div>
    </div>
  );
}