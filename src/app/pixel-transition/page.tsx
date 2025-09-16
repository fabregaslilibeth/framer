"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
        <CenteredPixelTransition
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

const anim2 = {
  initial: {
    opacity: 0,
  },
  open: (i) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.03 * i },
  }),
  closed: (i) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.03 * i },
  }),
};

const CenteredPixelTransition = ({
  menuIsActive,
  dimensions,
}: {
  menuIsActive: boolean;
  dimensions: { width: number; height: number };
}) => {
  const { width, height } = dimensions;

  /**
   * Shuffles array in place (Fisher–Yates shuffle).
   * @param {Array} a items An array containing the items.
   */
  const shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const getBlocks = () => {
    const { innerWidth, innerHeight } = window;
    const blockSize = innerWidth * 0.05;
    const nbOfBlocks = Math.ceil(innerHeight / blockSize);
    const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i));
    return shuffledIndexes.map((randomIndex, index) => {
      return (
        <motion.div
          key={index}
          className='block'
          variants={anim2}
          initial="initial"
          animate={menuIsActive ? "open" : "closed"}
          custom={randomIndex}
        />
      );
    });
  };

  return (
    <div className='pixelBackground'>
      {[...Array(20)].map((_, index) => {
        return (
          <div key={index} className='column'>
            {getBlocks()}
          </div>
        );
      })}
    </div>
  );
};
