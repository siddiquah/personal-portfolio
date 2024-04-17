import React from "react";
import CircularProgress from "./CircularProgress";

function Langs() {
  return (
    <div className="px-4 md:px-12 mt-12">
      <div className="flex items-center justify-center flex-wrap">
        <div className="w-[20px] h-[9px] bg-green-600 rounded-full"></div>
        <div className="flex-grow border-t-[1px] mx-2"></div>
        <h2 className="text-[18px] md:text-[24px] font-bold whitespace-nowrap">
          Languages
        </h2>
        <div className="flex-grow border-t-[1px] mx-2"></div>
        <div className="w-[20px] h-[9px] bg-green-600 rounded-full"></div>
      </div>

      <div
        className="flex justify-center "
        style={{ position: "relative", zIndex: -100 }}
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
