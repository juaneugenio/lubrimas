import { useState, useEffect } from 'react';

export const useNavPosition = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero-section');
      if (!hero) return;
      
      const heroRect = hero.getBoundingClientRect();
      const isPastHero = window.scrollY > heroRect.height - 140;
      
      setIsFixed(isPastHero);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isFixed };
};