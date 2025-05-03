
import { useState, useEffect } from 'react';

export interface TextAnimationState {
  displayText: string;
  isAnimating: boolean;
  direction: 'left' | 'right';
}

export const useTextAnimation = (texts: string[], interval: number = 3000) => {
  const [state, setState] = useState<TextAnimationState>({
    displayText: texts[0],
    isAnimating: false,
    direction: 'left'
  });
  
  useEffect(() => {
    // Only set up animation if we have more than one text to animate between
    if (texts.length <= 1) return;
    
    // Create interval to switch between texts
    const intervalId = setInterval(() => {
      setState(prevState => {
        const currentIndex = texts.indexOf(prevState.displayText);
        const nextIndex = (currentIndex + 1) % texts.length;
        return {
          displayText: texts[nextIndex],
          isAnimating: true,
          direction: 'left'
        };
      });
    }, interval);
    
    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, [texts, interval]);

  return state;
};
