"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const [transitionType, setTransitionType] = useState(null);

  const handleToggle = () => {
    if (isAnimating) return;

    if (prefersReducedMotion) {
      toggleTheme();
      return;
    }

    setIsAnimating(true);
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTransitionType(nextTheme);

    if (nextTheme === "light") {
      // Cinematic Bomb Drop (Dark -> Light)
      // Timing matching the AAA game trailer feel (2x slower)
      setTimeout(() => {
        toggleTheme();
      }, 2000);

      setTimeout(() => {
        setIsAnimating(false);
      }, 3600);
    } else {
      // Fade to Black (Light -> Dark)
      // Screen turns black quickly, then slowly fades in
      setTimeout(() => {
        toggleTheme(); // Switch theme while screen is fully black
      }, 500);

      setTimeout(() => {
        setIsAnimating(false); // Begin slow fade out of the black overlay
      }, 700);
    }
  };

  return (
    <>
      <button
        onClick={handleToggle}
        disabled={isAnimating}
        className={`p-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors relative z-50 ${
          isAnimating ? "cursor-not-allowed" : ""
        }`}
        aria-label="Toggle Dark Mode"
      >
        {theme === "dark" ? (
          // Sun Icon for Dark Mode (Click to switch to Light)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ) : (
          // Moon Icon for Light Mode (Click to switch to Dark)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        )}
      </button>

      {mounted && createPortal(
        <AnimatePresence>
          {isAnimating && transitionType === "light" && (
            <motion.div
              key="light-transition"
              className="fixed inset-0 z-[99999] pointer-events-none overflow-hidden"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0 }}
            >
              {/* Screen Shake Container */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  x: [0, -15, 15, -10, 10, -5, 5, 0],
                  y: [0, 15, -15, 10, -10, 5, -5, 0],
                }}
                transition={{
                  delay: 1.9,
                  duration: 0.8,
                  times: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.8, 1],
                }}
              >
                {/* Plane */}
                <motion.div
                  className="absolute top-[15%] -translate-y-1/2 flex items-center"
                  initial={{ x: "-20vw" }}
                  animate={{ x: "120vw" }}
                  transition={{ duration: 2.4, ease: "linear" }}
                >
                  {/* Engine Trail */}
                  <motion.div
                    className="w-48 h-1 bg-gradient-to-l from-orange-500/80 to-transparent blur-[2px] -mr-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  {/* Side Profile Fighter Jet Silhouette */}
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                    fill="url(#metalPlane)"
                    className="drop-shadow-[0_10px_15px_rgba(255,255,255,0.4)]"
                  >
                    <defs>
                      <linearGradient id="metalPlane" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="50%" stopColor="#a1a1aa" />
                        <stop offset="100%" stopColor="#52525b" />
                      </linearGradient>
                    </defs>
                    <path d="M23 13 L17 11 C15 7 12 7 10 10 L6 10 L2 3 L0 3 L2 11 L0 11 L0 15 L3 15 L1 19 L7 19 L12 15 L18 15 Z" />
                  </svg>
                </motion.div>

                {/* Bomb */}
                <motion.div
                  className="absolute left-[45%] top-[15%]"
                  initial={{
                    y: 0,
                    x: "-10vw",
                    scale: 0.3,
                    rotateZ: 0,
                  }}
                  animate={{
                    y: "45vh",
                    x: "5vw",
                    scale: 3,
                    rotateZ: 90,
                  }}
                  transition={{ delay: 0.8, duration: 1.2, ease: "easeIn" }}
                >
                  {/* Bomb Shape & Trail Container (handles opacity precisely) */}
                  <motion.div
                    className="relative flex items-center justify-center w-10 h-10"
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ delay: 0.8, duration: 1.2, times: [0, 0.1, 0.95, 1] }}
                  >
                    {/* Smoke Trail */}
                    <motion.div
                      className="absolute right-[85%] top-1/2 -translate-y-1/2 h-2 w-32 bg-gradient-to-l from-gray-400/80 to-transparent blur-[3px] origin-right"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ delay: 0.9, duration: 1.0 }}
                    />
                    
                    {/* Improved Aerodynamic Heavy Bomb SVG */}
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      className="drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] relative z-10"
                      fill="url(#metalBomb)"
                    >
                      <defs>
                        <linearGradient id="metalBomb" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="50%" stopColor="#a1a1aa" />
                          <stop offset="100%" stopColor="#52525b" />
                        </linearGradient>
                      </defs>
                      <path d="M23 12 C23 16 17 18 10 18 L4 15 L4 9 L10 6 C17 6 23 8 23 12 Z M8 7 L3 2 L1 2 L1 9 L4 9 Z M8 17 L3 22 L1 22 L1 15 L4 15 Z M4 11 L0 11 L0 13 L4 13 Z" />
                    </svg>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Shockwave */}
              <motion.div
                className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[10px] border-white/80"
                initial={{ width: 0, height: 0, opacity: 0 }}
                animate={{
                  width: "200vw",
                  height: "200vw",
                  opacity: [0, 1, 0],
                  borderWidth: ["40px", "0px"],
                }}
                transition={{ delay: 1.96, duration: 1.2, ease: "easeOut" }}
              />

              {/* Plasma Ring / Fireball */}
              <motion.div
                className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/60 blur-[60px]"
                initial={{ width: 0, height: 0, opacity: 0 }}
                animate={{ width: "150vw", height: "150vw", opacity: [0, 1, 0] }}
                transition={{ delay: 1.9, duration: 1.4, ease: "easeOut" }}
              />

              {/* Particle Burst */}
              {Array.from({ length: 16 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-[55%] w-3 h-3 rounded-full bg-yellow-200 shadow-[0_0_20px_rgba(253,224,71,0.8)]"
                  initial={{ x: "-50%", y: "-50%", scale: 1, opacity: 0 }}
                  animate={{
                    x: `calc(-50% + ${
                      Math.cos((i * 22.5 * Math.PI) / 180) * 80
                    }vw)`,
                    y: `calc(-50% + ${
                      Math.sin((i * 22.5 * Math.PI) / 180) * 80
                    }vh)`,
                    scale: 0,
                    opacity: [0, 1, 0],
                  }}
                  transition={{ delay: 1.96, duration: 1.4, ease: "easeOut" }}
                />
              ))}

              {/* Flash Core & Theme Morph Mask */}
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{
                  delay: 1.9,
                  duration: 1.6,
                  times: [0, 0.1, 0.6, 1],
                }}
              />
            </motion.div>
          )}

          {isAnimating && transitionType === "dark" && (
            <motion.div
              key="dark-transition"
              className="fixed inset-0 z-[99999] pointer-events-none bg-[#050505]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }}
              exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
            />
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
