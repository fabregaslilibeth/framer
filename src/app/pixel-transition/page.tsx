"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CenteredPixelTransition from "../components/CenteredPixelTransition/page";
import VerticalPixelTransition from "../components/VerticalPixelTransition/page";
import HorizontalPixelTransition from "../components/HorizontalPixelTransition/page";
import "./style.css";

export default function Home() {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const updateDimensions = () => {
    const { innerWidth, innerHeight } = window;

    setDimensions({ width: innerWidth, height: innerHeight });
  };

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <main className="main">
      <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
      <Menu menuIsActive={menuIsActive} />
      {dimensions.height > 0 && (
        // <CenteredPixelTransition
        //   menuIsActive={menuIsActive}
        //   dimensions={dimensions}
        // />
      //   <VerticalPixelTransition
      //     menuIsActive={menuIsActive}
      //     dimensions={dimensions}
      // />
      <HorizontalPixelTransition
        menuIsActive={menuIsActive}
        dimensions={dimensions}
      />
      )}
    </main>
  );
}

const Header = ({
  menuIsActive,
  setMenuIsActive,
}: {
  menuIsActive: boolean;
  setMenuIsActive: (menuIsActive: boolean) => void;
}) => {
  return (
    <div className="header fixed flex justify-end w-full p-4 z-10 top-0 p-12">
      <div
        onClick={() => {
          setMenuIsActive(!menuIsActive);
        }}
        className={`burger ${menuIsActive ? "active" : ""}`}
      ></div>
    </div>
  );
};

const anim = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Menu = ({ menuIsActive }: { menuIsActive: boolean }) => {
  return (
    <motion.div
      className="menu"
      variants={anim}
      initial="initial"
      animate={menuIsActive ? "open" : "closed"}
    >
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
    </motion.div>
  );
};