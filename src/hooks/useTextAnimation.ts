
import { useState, useEffect } from 'react';

export const useTextAnimation = (texts: string[], interval: number = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(texts[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTransitioning(false);
      }, 500); // Half of the transition duration
    }, interval);

    return () => clearInterval(timer);
  }, [interval, texts.length]);

  useEffect(() => {
    setDisplayText(texts[currentIndex]);
  }, [currentIndex, texts]);

  return { displayText, isTransitioning };
};
