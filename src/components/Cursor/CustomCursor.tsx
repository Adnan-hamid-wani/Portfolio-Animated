import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY, id: Date.now() };
      setPosition({ x: e.clientX, y: e.clientY });

      // Add to trail starting from the cursor's position
      setTrail((prev) => [...prev, newPosition].slice(-20));

      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      {/* Glittering Trail from Cursor */}
      {trail.map((t, index) => (
        <motion.div
          key={t.id}
          className={`fixed w-3 h-3 rounded-full pointer-events-none z-40 
                      ${index % 2 === 0 ? 'bg-yellow-300' : 'bg-blue-300'} 
                      mix-blend-difference 
                      animate-pulse`} 
          initial={{
            x: position.x - 5,
            y: position.y - 5,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            x: t.x - 5 - index * 2,
            y: t.y - 5 - index * 2,
            opacity: 0,
            scale: 0.5,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        />
      ))}
    </>
  );
}