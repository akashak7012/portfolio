"use client";
import { useState, useEffect } from 'react';

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Ensure window is defined (for server-side rendering)
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      
      // Update state if the media query match changes
      const listener = () => {
        setMatches(media.matches);
      };

      // Set the initial state
      listener();
      
      // Add event listener for changes
      media.addEventListener('change', listener);

      // Cleanup listener on component unmount
      return () => media.removeEventListener('change', listener);
    }
  }, [query]);

  return matches;
};