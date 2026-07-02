import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 12) + 6;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setVisible(false), 250);
          return 100;
        }
        return next;
      });
    }, 90);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            opacity: 0,
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 bg-black z-[99999] flex flex-col items-center justify-center select-none"
        >
          {/* Glowing logo badge inside loader */}
          <div className="relative mb-10 flex flex-col items-center gap-5">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-18 h-18 bg-gradient-to-tr from-indigo-500 via-purple-500 to-fuchsia-500 p-[1.5px] rounded-2xl shadow-[0_0_40px_rgba(99,102,241,0.25)]"
            >
              <div className="w-full h-full bg-zinc-950 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
                  <polygon points="50,6 88,33 73,78 27,78 12,33" stroke="#6366F1" strokeWidth="6" strokeLinejoin="round" />
                  <path d="M30,38 C30,26 46,26 48,32 C50,42 32,48 32,58 L52,58" stroke="#A855F7" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M66,31 L66,58 M58,36 L66,31" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="font-extrabold text-xl tracking-[0.25em] text-white"
            >
              21VISION
            </motion.span>
          </div>

          {/* Glowing loading bar */}
          <div className="w-52 h-[3px] bg-zinc-900 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>

          {/* Loader Percentage */}
          <span className="text-zinc-500 font-mono text-xs font-bold mt-4 tracking-wider">
            {Math.min(progress, 100)}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
