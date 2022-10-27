import { useEffect, useState } from 'react';

export const useScrollIndicator = () => {
  const [scrolledHeight, setScrolledHeight] = useState(0);

  useEffect(() => {
    const updateScrolledHeight = () => {
      const windowScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrolledHeight((windowScroll / height) * 100);
    };

    window.addEventListener('scroll', updateScrolledHeight);

    updateScrolledHeight();

    return () => window.removeEventListener('scroll', updateScrolledHeight);
  }, []);

  return scrolledHeight;
};
