import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CoinRain = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const coins = [];

    for (let i = 0; i < 30; i++) {
      const coin = document.createElement('div');
      coin.classList.add('coin');
      coin.style.left = `${Math.random() * 100}%`;
      container.appendChild(coin);
      coins.push(coin);

      gsap.to(coin, {
        y: window.innerHeight,
        duration: Math.random() * 2 + 3,
        delay: Math.random() * 2,
        repeat: -1,
        ease: 'none',
      });
    }

    return () => {
      coins.forEach((coin) => container.removeChild(coin));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
    ></div>
  );
};

export default CoinRain;
