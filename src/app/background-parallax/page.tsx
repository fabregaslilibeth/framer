"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import BackgroundImageParallax from "../components/BackgroundImageParallax";
import Section from "../components/Section";
import Footer from "../components/Footer";

export default function BackgroundParallax() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

    }, []);

    return (
        <main>
            <BackgroundImageParallax />
            <div className='flex justify-center my-40'>
                <p className='text-[7.5vw] uppercase text-center max-w-[50vw] leading-none'>The quick brown fox jumps over the lazy dog</p>
            </div>
            <Section />
            <div className='h-screen'></div>
            <Footer />
        </main>
    );
}