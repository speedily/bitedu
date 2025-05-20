
import { useEffect, useState } from 'react';

const ConfettiExplosion = () => {
  const [confetti, setConfetti] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    const colors = ['#F7931A', '#FFCA80', '#FFF8E1', '#FFB74D', '#FFECB3'];
    const confettiCount = 150;
    const confettiPieces: JSX.Element[] = [];
    
    for (let i = 0; i < confettiCount; i++) {
      const left = Math.random() * 100;
      const width = Math.random() * 10 + 5;
      const height = Math.random() * 10 + 5;
      const bg = colors[Math.floor(Math.random() * colors.length)];
      const animationDuration = Math.random() * 3 + 2;
      const delay = Math.random() * 1;
      const rotation = Math.random() * 360;
      const initialY = Math.random() * 20 - 10;
      
      confettiPieces.push(
        <div
          key={i}
          className="confetti-piece absolute"
          style={{
            left: `${left}%`,
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: bg,
            transform: `rotate(${rotation}deg)`,
            opacity: 1,
            transition: `transform ${animationDuration}s ease, opacity ${animationDuration}s ease`,
            transitionDelay: `${delay}s`,
            top: `${initialY}%`,
          }}
        />
      );
    }
    
    setConfetti(confettiPieces);
    
    // Animation timing
    setTimeout(() => {
      const elements = document.querySelectorAll('.confetti-piece');
      elements.forEach((el) => {
        const element = el as HTMLElement;
        element.style.transform = `translateY(${Math.random() * 1000 + 500}px) rotate(${Math.random() * 720}deg)`;
        element.style.opacity = '0';
      });
    }, 50);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confetti}
      <style>
        {`
          .confetti-piece {
            position: absolute;
            will-change: transform, opacity;
          }
        `}
      </style>
    </div>
  );
};

export default ConfettiExplosion;
