"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import "./svgmask.css"; // 👈 import your CSS file


export function SVGMaskEffectDemo() {
  return (
    <div className="svg-demo-container">
      <MaskContainer
        revealText={
          <p className="svg-reveal-text">
            Hello, I am{" "} <span className="highlight">AKASH</span>, a developer who thrives on bringing ideas to life. 
            Let's build something amazing together!
          </p>
        }
        className="svg-mask-box"
      >
        My passion for code was forged at{" "}
        <span className="highlight">NIT Puducherry</span>  where I pursue my B.Tech in Computer Science Engineering. There, I mastered the 
        <span className="highlight">Fundamentals of Algorithms</span>,{" "}
        <span className="highlight">Data Structures</span>, and{" "}
        <span className="highlight">Web Development</span>,setting the stage for building robust and scalable applications.
      </MaskContainer>
    </div>
  );
}

export default SVGMaskEffectDemo;
