"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import "./style.css";

const anim = {
  initial: { width: 0, height: "15vh" },

  open: {
    width: "10vw",
    height: "15vh",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },

  closed: { width: 0, height: "15vh" },
};

export default function Home() {
  const projects = [
    {
      title1: "Puerto",
      title2: "Princesa",
      src: "https://cdn.pixabay.com/photo/2021/06/22/17/24/torres-del-paine-6356782_1280.jpg",
    },
    {
      title1: "Chocolate",
      title2: "Hills",
      src: "https://cdn.pixabay.com/photo/2021/10/26/11/28/chocolate-hills-6743421_1280.jpg",
    },
    {
      title1: "Banaue ",
      title2: "Rice Terraces",
      src: "https://cdn.pixabay.com/photo/2018/11/10/16/41/philippines-3806956_960_720.jpg",
    },
    {
      title1: "Samal",
      title2: "Island",
      src: "https://media2.thrillophilia.com/images/photos/000/373/182/original/1621935113_shutterstock_1830669002.jpg?w=753&h=450&dpr=1.0",
    },
    {
      title1: "Batan",
      title2: "Island",
      src: "https://media2.thrillophilia.com/images/photos/000/373/187/original/1621935438_shutterstock_1134296975.jpg?w=753&h=450&dpr=1.0",
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
        <img src={src} className="w-full h-full object-cover"></img>
      </motion.div>

      <p>{title2}</p>
    </div>
  );
};
