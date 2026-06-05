import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const spring = useSpring(progress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = scrollTop / (scrollHeight - clientHeight);
      setProgress(pct);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gradient-to-r from-primary via-primary-light to-accent origin-left"
      style={{ scaleX: spring }}
      aria-hidden="true"
    />
  );
}
