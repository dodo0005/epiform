import { useEffect, useRef } from 'react';

// This component tracks the movement of the cursor and performs a styling effect wherever it moves
const GlowOverlay = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (overlayRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        // Update CSS variables on the element
        overlayRef.current.style.setProperty('--x', `${x}px`);
        overlayRef.current.style.setProperty('--y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup listener
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={overlayRef}
      // Classes
      className="fixed inset-0 pointer-events-none cursor-glow z-50"
      // Initialize variables to avoid glitches before first move
      style={{ '--x': '0px', '--y': '0px' }}
    />
  );
};

export default GlowOverlay;