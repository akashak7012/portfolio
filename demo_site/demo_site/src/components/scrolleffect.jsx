import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollCards() {
  useEffect(() => {
    gsap.to(".card", {
      x: -200, // move left
      ease: "none",
      stagger: 0.2, // delay between each card
      scrollTrigger: {
        trigger: ".cards-container",
        start: "top 80%",   // when cards enter viewport
        end: "bottom 20%", // when they exit viewport
        scrub: true,       // smooth + tied to scroll
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center space-y-10">
      {/* Title */}
      <h1 className="text-6xl font-bold text-white mb-10">
        <span className="bg-gradient-to-r from-green-400 to-green-500 text-black px-4 py-2 rounded">
          Nice and
        </span>{" "}
        Add personality
      </h1>

      {/* Cards */}
      <div className="cards-container flex flex-col space-y-6">
        <div
          className="card px-6 py-3 rounded-xl text-black font-bold text-lg shadow-xl"
          style={{ background: "linear-gradient(135deg, #a78bfa, #ec4899)" }}
        >
          Easy
        </div>
        <div
          className="card px-6 py-3 rounded-xl text-black font-bold text-lg shadow-xl"
          style={{ background: "linear-gradient(135deg, #f97316, #ec4899)" }}
        >
          Easing
        </div>
        <div
          className="card px-6 py-3 rounded-xl text-black font-bold text-lg shadow-xl"
          style={{ background: "linear-gradient(135deg, #06b6d4, #3b82f6)" }}
        >
          Smooth
        </div>
      </div>
    </div>
  );
}
