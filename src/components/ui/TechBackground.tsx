"use client";

import { motion } from "framer-motion";

export function TechBackground() {
  return (
    <>
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--text-muted) 1px, transparent 1px),
            linear-gradient(to bottom, var(--text-muted) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, #000 40%, transparent 100%)',
        }}
      />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen dark:mix-blend-lighten">
        <motion.div 
          className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-accent-primary/10 blur-[100px]"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] rounded-full bg-accent-secondary/10 blur-[100px]"
          animate={{
            x: [0, -30, 0],
            y: [0, -40, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
    </>
  );
}
