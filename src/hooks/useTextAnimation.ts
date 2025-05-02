
import { useState, useEffect, useRef } from 'react';

export const useTextAnimation = (texts: string[], interval: number = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(texts[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Cleanup function to clear any existing timeouts/intervals
  const cleanup = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };

  useEffect(() => {
    // Only set up animation if we have more than one text to animate between
    if (texts.length <= 1) return;
    
    // Start the animation cycle
    const startAnimation = () => {
      // Set initial text
      setDisplayText(texts[0]);
      setCurrentIndex(0);
      
      intervalRef.current = window.setInterval(() => {
        setIsTransitioning(true);
        
        // After the slide-out completes, change the text and slide-in
        timeoutRef.current = window.setTimeout(() => {
          const nextIndex = (currentIndex + 1) % texts.length;
          setCurrentIndex(nextIndex);
          setDisplayText(texts[nextIndex]);
          setIsTransitioning(false);
        }, 300); // Faster transition time
      }, interval);
    };
    
    startAnimation();
    
    // Cleanup on unmount
    return cleanup;
  }, [texts, interval]);

  return { displayText, isTransitioning };
};
