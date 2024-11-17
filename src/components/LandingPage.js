"use client";

import Container from "@/components/utility/Container";
import Graphics from "@/components/LandingPage/Graphics";
import Details from "./LandingPage/Details";
import { useState, useEffect } from "react";

const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};

export default function LandingPage() {
  const [pos, setPos] = useState({ x: 0 });

  const handleMouseMove = debounce((e) => {
    const windowWidth = typeof window !== "undefined" ? window?.innerWidth : 0;
    const screenOffset = windowWidth > 384 ? -120 : 0;
    const xOffset = e.clientX + screenOffset;
    setPos({ x: -xOffset });
  }, 10);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <Container section="home">
      <div
        className="flex h-auto w-full flex-col content-center items-center"
      >
        <Details />
        <Graphics pos={pos} />
      </div>
    </Container>
  );
}
