import { useEffect, useRef } from "react";

export default function Spotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      pos.current = {
        x: e.clientX,
        y: e.clientY,
      };

      moveSpotlight();
    };

    const moveSpotlight = () => {
      if (!spotlightRef.current) return;

      spotlightRef.current.style.setProperty("--x", `${pos.current.x}px`);
      spotlightRef.current.style.setProperty("--y", `${pos.current.y}px`);
    };

    // Initialize position to center of screen
    if (spotlightRef.current) {
      pos.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };
      moveSpotlight();
    }

    window.addEventListener("pointermove", handleMove);

    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <>
      <style>{`
        .spotlight {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 999;
          mix-blend-mode: difference;
          background: radial-gradient(
            55rem circle at var(--x, 50%) var(--y, 50%),
            rgba(255, 255, 255, 0.15),
            transparent 60%
          );
          transition: background 0.1s ease-out;
        }
      `}</style>
      <div
        ref={spotlightRef}
        className="spotlight"
      />
    </>
  );
}
