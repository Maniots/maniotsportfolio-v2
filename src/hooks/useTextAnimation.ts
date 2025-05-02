
import { useState, useEffect } from 'react';

export const useTextAnimation = (texts: string[], interval: number = 3000) => {
  const [displayText, setDisplayText] = useState(texts[0]);
  
  useEffect(() => {
    // Only set up animation if we have more than one text to animate between
    if (texts.length <= 1) return;
    
    // Create interval to switch between texts
    const intervalId = setInterval(() => {
      setDisplayText(prevText => {
        const currentIndex = texts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, interval);
    
    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, [texts, interval]);

  return { displayText };
};
