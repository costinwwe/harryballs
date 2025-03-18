import React, { useEffect } from 'react';

const MagicSparkles = () => {
  useEffect(() => {
    // Create sparkle style
    const style = document.createElement('style');
    style.innerHTML = `
      .magic-sparkle {
        position: absolute;
        background: radial-gradient(circle, #fff 10%, transparent 60%);
        pointer-events: none;
        z-index: 10000;
        opacity: 0;
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }
      
      @keyframes sparkle {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        20% { opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    // Function to create a sparkle
    const createSparkle = (x, y) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'magic-sparkle';
      
      // Random sparkle properties
      const size = Math.random() * 20 + 10; // 10-30px
      const duration = Math.random() * 1000 + 500; // 500-1500ms
      const color = Math.random() > 0.5 ? '#9f7aea' : '#4299e1'; // Purple or blue
      
      // Set sparkle styles
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.boxShadow = `0 0 ${size/3}px ${color}`;
      sparkle.style.animation = `sparkle ${duration}ms forwards`;
      
      document.body.appendChild(sparkle);
      
      // Remove sparkle after animation ends
      setTimeout(() => {
        document.body.removeChild(sparkle);
      }, duration);
    };

    // Create sparkles while moving mouse
    const handleMouseMove = (e) => {
      // Only create sparkles occasionally
      if (Math.random() > 0.9) {
        createSparkle(e.clientX, e.clientY);
      }
    };

    // Create sparkles on click
    const handleClick = (e) => {
      // Create multiple sparkles on click
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          const offsetX = (Math.random() - 0.5) * 40;
          const offsetY = (Math.random() - 0.5) * 40;
          createSparkle(e.clientX + offsetX, e.clientY + offsetY);
        }, i * 50);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      document.head.removeChild(style);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default MagicSparkles;