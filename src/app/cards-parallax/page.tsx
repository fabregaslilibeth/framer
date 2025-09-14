"use client";

import { useRef, useEffect } from "react";
import Card from "../components/CardParallax";
import { useScroll } from "framer-motion";
import Lenis from "lenis";

export default function Home() {
  const projects = [
    {
      title: "Matthias Leidinger",
      description:
        "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
      src: "https://cdn.pixabay.com/photo/2023/03/25/21/48/cat-7876974_1280.jpg",
      link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
      color: "#BBACAF",
    },
    {
      title: "Clément Chapillon",
      description:
        "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
      src: "https://cdn.pixabay.com/photo/2023/03/25/21/48/cat-7876974_1280.jpg",
      link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
      color: "#977F6D",
    },
    {
      title: "Zissou",
      description:
        "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
      src: "https://cdn.pixabay.com/photo/2023/03/25/21/48/cat-7876974_1280.jpg",
      link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
      color: "#C2491D",
    },
    {
        title: "Matthias Leidinger",
        description:
          "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
        src: "https://cdn.pixabay.com/photo/2023/03/25/21/48/cat-7876974_1280.jpg",
        link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
        color: "#BBACAF",
      },
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  
  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  return (
    <main ref={container} className="my-[50vh] relative">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        console.log(targetScale, 'targetScale 1');
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
