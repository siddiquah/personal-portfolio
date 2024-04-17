import React from 'react';
import Strings from '../Shared/Strings';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { useInView } from 'react-intersection-observer';

function Services() {
    const { ref, inView } = useInView({
        triggerOnce: false, // Animation re-triggers every time it comes into view
        threshold: 0.5, // Trigger when 50% of the element is visible
    });

    // Transition styles for appearing effect
    const transitionStyles = {
        initial: "translate-y-10 opacity-0",
        final: "translate-y-0 opacity-100",
    };
    const servicesList = [
        {
            id: 1,
            title: Strings.FRONTED,
            desc: Strings.FRONTED_DESC,
            logo: "/design.png",
        },
        {
            id: 2,
            title: Strings.BACKEND,
            desc: Strings.BACKEND_DESC,
            logo: "/backend.png",
        },
        {
            id: 3,
            title: Strings.ONLINE,
            desc: Strings.ONLINE_DESC,
            logo: "/teaching.png",
        },
    ];

    return (
        <div className='px-12 mt-12'>
            <div className="flex items-center justify-center flex-wrap">
                <div className="w-[10px] h-[10px] bg-green-600 rounded-full"></div>
                <div className="flex-grow border-t-[1px] mx-2"></div>
                <h2
                    ref={ref}
                    className={`text-[18px] md:text-[24px] font-bold whitespace-nowrap transition-all duration-700 ease-out ${inView ? transitionStyles.final : transitionStyles.initial
                        }`}
                >
                    Services
                </h2>
                <div className="flex-grow border-t-[1px] mx-2"></div>
                <div className="w-[10px] h-[10px] bg-green-600 rounded-full"></div>
            </div>


            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-around mt-16'>
                {servicesList.map((item) => (
                    <div className='text-center flex flex-col justify-center items-center gap-6'>
                        <div className='bg-gray-200 rounded-full w-[80px] h-[80px]'>
                            <img src={item.logo} alt={item.title} className='w-full h-full p-5 hover:scale-110 transition-all cursor-pointer' />
                        </div>
                        <h2 className='mt-5 font-bold'>{item.title}</h2>
                        <p className='text-gray-400 max-w-xs'>{item.desc}</p>
                        <IoArrowForwardOutline className="bg-green-500 text-[35px] p-2 text-white rounded-full cursor-pointer hover:scale-110 transition-all" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
