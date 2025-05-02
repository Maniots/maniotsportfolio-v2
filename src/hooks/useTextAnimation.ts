
import { useState, useEffect, useRef } from 'react';

export const useTextAnimation = (texts: string[], interval: number = 3000) => {
  const [displayText, setDisplayText] = useState(texts[0]);
  const intervalRef = useRef<number | null>(null);

  // Cleanup function to clear any existing intervals
  const cleanup = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };

  useEffect(() => {
    // Only set up animation if we have more than one text to animate between
    if (texts.length <= 1) return;
    
    // Start the animation cycle
    const startAnimation = () => {
      // Set initial text
      setDisplayText(texts[0]);
      
      let currentIndex = 0;
      intervalRef.current = window.setInterval(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        setDisplayText(texts[currentIndex]);
      }, interval);
    };
    
    startAnimation();
    
    // Cleanup on unmount
    return cleanup;
  }, [texts, interval]);

  return { displayText };
};
