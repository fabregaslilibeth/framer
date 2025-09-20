"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import "./style.css";

const anim = {
  initial: { width: 0 },

  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },

  closed: { width: 0 },
};

export default function Home() {
  const projects = [
    {
      title1: "Jomor",
      title2: "Design",
      src: "jomor_design.jpeg",
    },
    {
      title1: "La",
      title2: "Grange",
      src: "la_grange.jpeg",
    },
    {
      title1: "Deux Huit",
      title2: "Huit",
      src: "deux_huit_huit.jpeg",
    },
    {
      title1: "Nothing",
      title2: "Design Studio",
      src: "nothing_design_studio.png",
    },
    {
      title1: "Mambo",
      title2: "Mambo",
      src: "mambo_mambo.jpeg",
    },
  ];

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[70%]">
        <p>Featured Work</p>
        {projects.map((project) => {
          return <Project project={project} />;
        })}
      </div>
    </main>
  );
}

const Project = ({ project }: { project: any }) => {
  const [isActive, setIsActive] = useState(false);
  const { title1, title2, src } = project;

  return (
    <div
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      className="project"
    >
      <p>{title1}</p>

      <motion.div
        variants={anim}
        animate={isActive ? "open" : "closed"}
        className="imgContainer"
      >
        <img src="https://cdn.pixabay.com/photo/2023/03/25/21/48/cat-7876974_1280.jpg"></img>
      </motion.div>

      <p>{title2}</p>
    </div>
  );
};
