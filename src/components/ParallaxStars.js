"use client";
import { useEffect, useRef } from 'react';
import './ParallaxStars.css'; // Create a separate CSS file for styling

const ParallaxStars = ({ children }) => {
  const starsRef = useRef();

  useEffect(() => {
    const starCount = 150;
    const starsContainer = starsRef.current;

    // Generate stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100 - 10}%`;
      star.style.animationDuration = `${2 + Math.random() * 10}s`; // Parallax speed
      starsContainer.appendChild(star);
    }

    // Cleanup
    return () => {
      starsContainer.innerHTML = '';
    };
  }, []);

  return (
    <div className="parallax-stars-wrapper">
      <div className="stars" ref={starsRef}></div>
      <div className="content">{children}</div>
    </div>
  );
};

export default ParallaxStars;
