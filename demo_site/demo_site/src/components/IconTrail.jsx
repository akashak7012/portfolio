import React from 'react';
import './IconTrail.css'; // Assuming you want to keep the same CSS file name

const MovingIcons = ({ title, logos }) => {
  return (
    <div className="icon-section">
      <h2 className="section-title">{title}</h2>
      <div className="infinite-scroll-container">
        <div className="icon-scroll-list">
          {/* Render the icons once */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="icon-item">
              <img src={logo.url} alt={logo.alt} />
            </div>
          ))}
          {/* Render them a second time for a seamless loop */}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="icon-item">
              <img src={logo.url} alt={logo.alt} />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="icon-item">
              <img src={logo.url} alt={logo.alt} />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="icon-item">
              <img src={logo.url} alt={logo.alt} />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="icon-item">
              <img src={logo.url} alt={logo.alt} />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="icon-item">
              <img src={logo.url} alt={logo.alt} />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="icon-item">
              <img src={logo.url} alt={logo.alt} />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="icon-item">
              <img src={logo.url} alt={logo.alt} />
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default MovingIcons;