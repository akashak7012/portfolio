"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import "./TextReveal.css";

export const TextReveal = ({ children, className = "" }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(/\s+/).filter(Boolean);

  return (
    <div ref={targetRef} className={`text-reveal-container ${className}`}>
      <div className="text-reveal-sticky">
        <span className="text-reveal-span">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = (i + 1) / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const [start, end] = range;

  // create a 4-point input range for smooth in -> hold -> out behaviour
  const delta = Math.max(0.01, (end - start) * 0.25); // relative padding
  const a = Math.max(0, start - delta);
  const b = start;
  const c = end;
  const d = Math.min(1, end + delta);
  const inputRange = [a, b, c, d];

  // opacity: fade in -> visible -> fade out
  const opacity = useTransform(progress, inputRange, [0, 1, 1, 0]);

  // color: white while revealing, black when revealed, back to white on exit
  const color = useTransform(progress, inputRange, [
    "#ffffff",
    "#ffffff",
    "#000000",
    "#ffffff",
  ]);

  return (
    <span className="word-wrapper">
      <span className="word-shadow" aria-hidden="true">
        {children}
      </span>
      <motion.span style={{ opacity, color }} className="word-text">
        {children}
      </motion.span>
    </span>
  );
};
