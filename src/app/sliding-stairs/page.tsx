"use client";
import { useState } from "react";

export default function SlidingStairs() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div>
      <Burger
        openMenu={() => {
          setMenuIsOpen(true);
        }}
      />
      <AnimatePresence mode="wait">{menuIsOpen && <Stairs />}</AnimatePresence>
    </div>
  );
}

const Burger = ({ openMenu }) => {
  return (
    <div
      onClick={() => {
        openMenu();
      }}
      className="button w-32 h-32 bg-black flex flex-col justify-end fixed top-0 right-4 p-2 cursor-pointer group"
    >
      <div className="background bg-yellow-500 w-full absolute left-0 top-0 z-[-1] h-0 transition-all duration-300 group-hover:h-full"></div>
      <svg
        className="absolute top-0 left-0 group-hover:stroke-black transition-all duration-300"
        width="56"
        height="7"
        viewBox="0 0 56 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="56" y1="0.5" x2="4.37114e-08" y2="0.500005" stroke="white" />

        <line x1="56" y1="6.5" x2="28" y2="6.5" stroke="white" />
      </svg>

      <p className="hidden text-white transform uppercase transition-all duration-300 group-hover:block">
        Menu
      </p>
    </div>
  );
};
