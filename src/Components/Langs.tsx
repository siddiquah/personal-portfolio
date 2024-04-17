import React from "react";
import CircularProgress from "./CircularProgress";
import { useInView } from "react-intersection-observer";

function Langs() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation re-triggers every time it comes into view
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  // Transition styles for appearing effect
  const transitionStyles = {
    initial: "translate-y-10 opacity-0",
    final: "translate-y-0 opacity-100",
  };

  return (
    <div className="px-4 md:px-12 mt-12">
      <div className="flex items-center justify-center flex-wrap">
        <div className="w-[10px] h-[10px] bg-green-600 rounded-full"></div>
        <div className="flex-grow border-t-[1px] mx-2"></div>
        <h2
          ref={ref}
          className={`text-[18px] md:text-[24px] font-bold whitespace-nowrap transition-all duration-700 ease-out ${inView ? transitionStyles.final : transitionStyles.initial
            }`}
        >
          Languages
        </h2>
        <div className="flex-grow border-t-[1px] mx-2"></div>
        <div className="w-[10px] h-[10px] bg-green-600 rounded-full"></div>
      </div>

      <div
        className="flex justify-center"
        style={{ position: "relative", zIndex: -1000 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full max-w-4xl">
          <div className="sm:col-span-1 lg:col-span-1 flex justify-center">
            <CircularProgress language="English" target="99" />
          </div>
          <div className="sm:col-span-1 lg:col-span-1 flex justify-center">
            <CircularProgress language="Hindi" target="90" />
          </div>
          <div className="sm:col-span-2 lg:col-span-1 flex justify-center">
            <CircularProgress language="Odia" target="80" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Langs;
