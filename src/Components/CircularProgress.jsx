import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function CircularProgress({ language, target }) {
  const [progress, setProgress] = useState(0);
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time the element comes into view
    threshold: 0.5, // Adjust as necessary based on when you want it to trigger
  });

  useEffect(() => {
    if (inView) {
      const targetProgress = parseInt(target, 10);
      const increment = 1;
      const intervalTime = 20;
      let currentProgress = 0;

      const interval = setInterval(() => {
        currentProgress += increment;
        if (currentProgress <= targetProgress) {
          setProgress(currentProgress);
          setOffset(circumference - (circumference * currentProgress) / 100);
        } else {
          clearInterval(interval);
        }
      }, intervalTime);

      return () => clearInterval(interval);
    }
    // Reset progress when out of view
    else {
      setProgress(0);
      setOffset(circumference);
    }
  }, [inView, circumference, target]);

  return (
    <div ref={ref} className="flex flex-col align-middle w-fit">
      <div className="w-60 h-60 relative mt-8">
        <svg className="w-full h-full" viewBox="0 0 120 120">
          <circle
            className="text-gray-300 stroke-current"
            strokeWidth="2"
            fill="none"
            cx="60"
            cy="60"
            r={radius}
          />
          <circle
            className="text-green-500 stroke-current"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            fill="none"
            cx="60"
            cy="60"
            r={radius}
            transform="rotate(-90 60 60)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-bold">
          {progress}%
        </div>
      </div>
      <div className="text-center mt-10 text-xl">{language}</div>
    </div>
  );
}

export default CircularProgress;
