import React, { useEffect, useState } from "react";

function CircularProgress({ language, target }) {
  const [progress, setProgress] = useState(0);
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  const targetProgress = parseInt(target, 10); // Make sure this is properly parsed

  useEffect(() => {
    const increment = 1;
    const intervalTime = 20;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + increment;
        if (nextProgress <= targetProgress) {
          setOffset(circumference - (circumference * nextProgress) / 100);
          return nextProgress;
        } else {
          clearInterval(interval);
          setOffset(circumference - (circumference * targetProgress) / 100);
          return targetProgress;
        }
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [circumference, targetProgress]);

  return (
    <div className="flex flex-col align-middle w-fit">
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
