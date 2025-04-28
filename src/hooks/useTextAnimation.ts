
import { useState, useEffect } from 'react';

export const useTextAnimation = (texts: string[], interval: number = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState((currentIndex + 1) % texts.length);
  const [displayText, setDisplayText] = useState(texts[0]);
  const [nextText, setNextText] = useState(texts[1]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        const newIndex = (currentIndex + 1) % texts.length;
        setCurrentIndex(newIndex);
        setNextIndex((newIndex + 1) % texts.length);
        setIsTransitioning(false);
      }, 2000); // Match the duration-[2000ms] in the CSS
    }, interval);

    return () => clearInterval(timer);
  }, [interval, texts.length, currentIndex]);

  useEffect(() => {
    setDisplayText(texts[currentIndex]);
    setNextText(texts[nextIndex]);
  }, [currentIndex, nextIndex, texts]);

  return { displayText, nextText, isTransitioning };
};
