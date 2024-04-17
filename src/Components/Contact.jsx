import { useInView } from "react-intersection-observer";

export default function Contact() {
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
    <div className="px-4 sm:px-12 mt-24">
      <div className="flex items-center justify-center flex-wrap">
        <div className="w-[10px] h-[10px] bg-green-600 rounded-full"></div>
        <div className="flex-grow border-t-[1px] mx-2"></div>
        <h2
          ref={ref}
          className={`text-[18px] md:text-[24px] font-bold whitespace-nowrap transition-all duration-700 ease-out ${
            inView ? transitionStyles.final : transitionStyles.initial
          }`}
        >
          Contact
        </h2>
        <div className="flex-grow border-t-[1px] mx-2"></div>
        <div className="w-[10px] h-[10px] bg-green-600 rounded-full"></div>
      </div>

      <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold tracking-widest mt-[100px] mb-[100px] text-center">
        Ready to bring your
        <br /> ideas to life? I'm here <br /> to help
      </h2>

      <div className="flex justify-center mt-[32px]">
        <button className="relative inline-block p-7 mb-[150px] px-16 text-lg font-medium transition duration-500 text-white ease-in-out bg-green-600  overflow-hidden hover:border-green-600 hover:text-green-600  hover:border-[1px] hover:bg-transparent rounded-none">
          Hover me
          {/* <span className="absolute z-0 w-64 h-64 bg-green-600 top-0 left-0 transform translate-x-full translate-y-full transition duration-700 ease-in-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span> */}
        </button>
      </div>
    </div>
  );
}
