import { useInView } from 'react-intersection-observer';

export default function Skills() {
    const skills = [
        { id: 1, name: "HTML", progress: 80 },
        { id: 2, name: "CSS", progress: 70 },
        { id: 3, name: "JavaScript", progress: 85 },
        { id: 4, name: "React", progress: 75 },
        { id: 5, name: "Node.js", progress: 65 },
        { id: 6, name: "Express.js", progress: 60 },
    ];

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
        <div className="px-12 mt-12">
            <div className="flex items-center justify-center flex-wrap">
                <div className="w-[10px] h-[10px] bg-green-600 rounded-full"></div>
                <div className="flex-grow border-t-[1px] mx-2"></div>
                <h2
                    ref={ref}
                    className={`text-[18px] md:text-[24px] font-bold whitespace-nowrap transition-all duration-700 ease-out ${inView ? transitionStyles.final : transitionStyles.initial
                        }`}
                >
                    Skills
                </h2>
                <div className="flex-grow border-t-[1px] mx-2"></div>
                <div className="w-[10px] h-[10px] bg-green-600 rounded-full"></div>
            </div>

            <div
                className="container mx-auto px-4 py-8"
                style={{ marginTop: "80px" }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill) => (
                        <div key={skill.id}>
                            <p className="font-semibold mb-1">{skill.name}</p>
                            <div className="bg-gray-200 h-2 rounded-full mb-1">
                                <div
                                    className="bg-green-500 h-2 rounded-full"
                                    style={{ width: `${skill.progress}%` }}
                                ></div>
                            </div>
                            <p className="text-right">{skill.progress}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}