
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
    // Set initial text
    setDisplayText(texts[0]);
    
    // Start the animation cycle
    const startAnimation = () => {
      // Only set up interval if we have more than one text to animate between
      if (texts.length <= 1) return;
      
      intervalRef.current = window.setInterval(() => {
        setIsTransitioning(true);
        
        // After the slide-out completes, change the text and start slide-in
        timeoutRef.current = window.setTimeout(() => {
          const nextIndex = (currentIndex + 1) % texts.length;
          setCurrentIndex(nextIndex);
          setDisplayText(texts[nextIndex]);
          setIsTransitioning(false);
        }, 1000); // This should match the duration in the Hero component
      }, interval);
    };
    
    startAnimation();
    
    // Cleanup on unmount
    return cleanup;
  }, [texts, interval, currentIndex]); // Add currentIndex as dependency

  return { displayText, isTransitioning };
};
