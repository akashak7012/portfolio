import { useState } from 'react'
import './App.css'
import LightRays from './components/lightbackground';
import TiltedCard from './components/TiltedCard';
import SVGMaskEffectDemo from './components/svgmask';
import TextRevealDemo from './components/textreveal'
import React from 'react';
import MovingIcons from './components/IconTrail.jsx';
import cssIcon from './assets/css-icon.svg';
import htmlIcon from './assets/html-icon.svg';
import illustrator from './assets/adobe-illustrator-icon.svg';
import photoshop from './assets/adobe-photoshop-icon.svg';
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import photo from './assets/profilephoto.jpg'
import Footer from './components/footer.jsx'; 
import { useMediaQuery } from "./hooks/useMediaQuery";
import ProjectsSection from './components/ProjectSection';
const frontendLogos = [
  { url: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg', alt: 'React' },
  { url: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg', alt: 'JavaScript' },
  { url: htmlIcon, alt: 'HTML5' },
  { url: cssIcon, alt: 'CSS3' },
  // Add more logos as needed
];

const backendLogos = [
  { url: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg', alt: 'Node.js' },
  { url: 'https://www.vectorlogo.zone/logos/python/python-icon.svg', alt: 'Python' },
  { url: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg', alt: 'MongoDB' },
  { url: 'https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg', alt: 'Django' },
  // Add more logos as needed
];

const designLogos = [
  { url: photoshop, alt: 'Photoshop' },
  { url: illustrator, alt: 'Illustrator' },
  { url: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg', alt: 'Figma' },
  { url: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg', alt: 'Framer' },
  // Add more logos as needed
];
function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // 2. Define the simple text to show on mobile
  const mobileFallbackText = (
    <p className="mobile-about-text">
      My passion for code was forged at{" "}
      <span className="highlight">NIT Puducherry</span> where I pursue my B.Tech
      in Computer Science Engineering. There, I mastered the{" "}
      <span className="highlight">Fundamentals of Algorithms</span>,{" "}
      <span className="highlight">Data Structures</span>, and{" "}
      <span className="highlight">Web Development</span>, setting the stage for
      building robust and scalable applications.
    </p>
  );
  return (
    <div className="App">
      {/* Background LightRays */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.4}
        noiseAmount={0}
        distortion={0}
        className="custom-rays"
      />

      {/* Navbar stays at top */}
  <nav className="navbar">
    <h2>DEV X DESIGN</h2>
    <div className="nav-links">
      <a href="#2">Contact</a>
      <a href="#1">About Me</a>
    </div>
  </nav>

  {/* Hero content stays in center */}
  <main className="hero" >
    <h1>
     Making websites cooler than my internet speed.
    </h1>
    <p>A portfolio showcasing my journey in web development and design.</p>
    <div className="buttons">
      <div style={{ padding: '10px' }}>
      <a 
        href="/resume.pdf" 
        download="resume.pdf"
        style={{ textDecoration: 'none' }} // Prevents the default underline
      >
        <InteractiveHoverButton>
          Download Resume
        </InteractiveHoverButton>
      </a>
    </div>
      
    </div>
  </main>

  {/* About section */}
  <section className='about-class' id='1'>
        <div className='about-class-container'>
          <div className="about">
            <div className='about-title'><h2>Who’s this guy?</h2></div>
            <div className="about-description">
              {/* 3. Use a ternary operator to conditionally render the component */}
              {isMobile ? mobileFallbackText : <SVGMaskEffectDemo />}
            </div>
          </div>
          <TiltedCard
            imageSrc={photo}
            altText="Akash's Photo"
            captionText="Akash"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">
                Akash's Photo
              </p>
            }
          />
        </div>
        <div />
      </section>
  
  <TextRevealDemo/>
  <div id='3'>
<ProjectsSection />
  </div>
  
  <div >
    <MovingIcons title="Design" logos={designLogos} />
      <MovingIcons title="Frontend" logos={frontendLogos} />
      <MovingIcons title="Backend" logos={backendLogos} />
      
  </div>
  <div id='2'>
    <Footer/>
  </div>
  
  
 


      

</div>
)
}

export default App
