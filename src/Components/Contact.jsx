export default function Contact() {
  return (
    <div className="px-4 sm:px-12 mt-24">
      <div className="flex items-center justify-center flex-wrap">
        <div className="w-[20px] h-[9px] bg-green-600 rounded-full"></div>
        <div className="flex-grow border-t-[1px] mx-2"></div>
        <h2 className="text-[20px] sm:text-[24px] md:text-[24px] lg:text-[30px] font-bold">
          Contact
        </h2>
        <div className="flex-grow border-t-[1px] mx-2"></div>
        <div className="w-[20px] h-[9px] bg-green-600 rounded-full"></div>
      </div>
      <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-black tracking-widest mt-[32px] text-center">
        Ready to bring your
        <br /> ideas to life? I'm here <br /> to help
      </h2>

      <div className="flex justify-center mt-[32px]">
        <button className="relative inline-block w-40 h-15 px-4 text-lg font-medium transition duration-500 ease-in-out bg-green-600 text-white overflow-hidden hover:text-white hover:bg-green-600">
          Hover me
          {/* <span className="absolute z-0 w-64 h-64 bg-green-600 top-0 left-0 transform translate-x-full translate-y-full transition duration-700 ease-in-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span> */}
        </button>
      </div>
    </div>
  );
}
