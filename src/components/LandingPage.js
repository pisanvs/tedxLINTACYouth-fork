"use client";

import Container from "@/components/utility/Container";
import Graphics from "@/components/LandingPage/Graphics";
import Details from "./LandingPage/Details";
import { useState } from "react";

const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};

export default function LandingPage() {
  const windowWidth =
    typeof window !== "undefined" ? window?.innerWidth : 0;
  const screenOffset = windowWidth > 384 ? -120 : 0;
  const [pos, setPos] = useState({ x: screenOffset });

  const handleMouseMove = debounce((e) => {
    const xOffset = (windowWidth - e.clientX) / 10 + screenOffset;
    setPos({ x: xOffset });
  }, 10);
  return (
    <Container section="home">
      <div
        className="flex h-auto w-full flex-col content-center items-center"
        onMouseMove={handleMouseMove}
      >
        <Details />
        <Graphics pos={pos} />
      </div>
    </Container>
  );
}
