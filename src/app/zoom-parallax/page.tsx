"use client";

import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef, useEffect } from 'react';
import Lenis from 'lenis';

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: 'https://cdn.pixabay.com/photo/2016/11/21/11/40/ocean-1844831_1280.jpg',
            scale: scale4,
            width: '25vw',
            height: '25vh'

        },
        {
            src: 'https://cdn.pixabay.com/photo/2018/06/13/18/20/waves-3473335_1280.jpg',
            scale: scale5,
            top: '-30vh',
            left: '5vw',
            width: '35vw',
            height: '30vh'
        },
        {
            src: 'https://cdn.pixabay.com/photo/2019/04/22/04/32/blue-4145659_1280.jpg',
            scale: scale6,
            top: '-10vh',
            left: '-25vw',
            width: '20vw',
            height: '45vh',

        },
        {
            src: 'https://cdn.pixabay.com/photo/2019/04/22/04/32/blue-4145659_1280.jpg',
            scale: scale8,
            top: '27.5vh',
            left: '-22.5vw',
            width: '30vw',
            height: '25vh',
        },
        {
            src: 'https://cdn.pixabay.com/photo/2019/04/22/04/32/blue-4145659_1280.jpg',
            scale: scale9,
            top: '22.5vh',
            left: '25vw',
            width: '15vw',
            height: '15vh',
        },
    ]

    useEffect( () => {
        const lenis = new Lenis()
    
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
    
    },[])

    return (
        <div ref={container} className='h-[300vh] relative'>
            <div className='sticky top-0 overflow-hidden h-screen'>
                {
                     pictures.map((image, index) => {
                        return <motion.div key={index} style={{scale: image.scale}} className='w-full h-full top-0 absolute flex items-center justify-center'>
                            <div className='relative' style={{width: image.width, height: image.height, ...(image.top && {top: image.top}), ...(image.left && {left: image.left})}}>
                                <Image
                                    src={image.src}
                                    fill
                                    alt="image"
                                    blurDataURL={image.src}
                                    style={{objectFit: 'cover'}}
                                    placeholder='blur'
                                />
                            </div>
    
                        </motion.div>
    
                    })
                }
            </div>
        </div>
    )
}