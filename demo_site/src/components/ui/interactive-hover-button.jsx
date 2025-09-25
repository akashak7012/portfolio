import React from 'react';
import './InteractiveHoverButton.css';
import { ArrowRight } from 'lucide-react'; // Assuming you have lucide-react installed

const InteractiveHoverButton = ({ children, className }) => {
  return (
    <div className={`interactive-hover-button ${className || ''}`}>
      <div className="initial-content">
        <div className="dot"></div>
        <span className="text">{children}</span>
      </div>
      <div className="hover-content">
        <span className="text">{children}</span>
        <ArrowRight />
      </div>
    </div>
  );
};

export default InteractiveHoverButton;