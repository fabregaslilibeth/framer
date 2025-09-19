"use client";
import { useEffect, useRef } from "react";

import styles from "./page.module.css";
import Lenis from "lenis";

export default function Home() {
  const initialMaskSize = 0.8;

  const targetMaskSize = 30;

  const container = useRef(null);
  const stickyMask = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

}, []);

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();

    stickyMask.current.style.webkitMaskSize =
      (initialMaskSize + maskSizeProgress) * 70 + "%";

    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight);

    return scrollProgress;
  };

  return (
    <main className={styles.main}>
      <div ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <video autoPlay muted loop>
            <source
              src="https://cdn.pixabay.com/video/2024/03/12/203951-922734722_large.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="h-screen"></div>
    </main>
  );
}
