import { useEffect, useState } from 'react';

export default function useScroll() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      setIsScrollingDown(prevScrollY < currentScrollY && currentScrollY > 0);
      setPrevScrollY(currentScrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return { isScrollingDown };
}
