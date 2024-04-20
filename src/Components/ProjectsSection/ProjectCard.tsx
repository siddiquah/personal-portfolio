import React from 'react';
import Strings from '../../Shared/Strings';
import './projects.css'

export default function ProjectCard() {
    const projectList = [
        {
            id: 1,
            title: Strings.PROJECT_NAME1,
            desc: Strings.PROJECT_DESC1,
            image: "/pro1.png",
            tags: ["HTML", "CSS", 'Javascript', 'Tailwind', 'Javascript', 'Tailwind'],
        },
        {
            id: 2,
            title: Strings.PROJECT_NAME2,
            desc: Strings.PROJECT_DESC2,
            image: "/pro2.png",
            tags: ["WebRTC", "ReactJS"],
        },
        {
            id: 3,
            title: Strings.PROJECT_NAME3,
            desc: Strings.PROJECT_DESC3,
            image: "/pro3.jpeg",
            href: "https://www.google.com/",
            tags: ["WebRTC", "ReactJS"],
        },
        {
            id: 4,
            title: Strings.PROJECT_NAME4,
            desc: Strings.PROJECT_DESC4,
            image: "/pro4.png",
            href: "https://www.google.com/",
            tags: ["WebRTC", "ReactJS"],
        },
        {
            id: 5,
            title: Strings.PROJECT_NAME5,
            desc: Strings.PROJECT_DESC5,
            image: "/pro5.png",
            href: "https://www.google.com/",
            tags: ["WebRTC", "ReactJS", 'Firebase'],
        },
        {
            id: 6,
            title: Strings.PROJECT_NAME6,
            desc: Strings.PROJECT_DESC6,
            image: "/pro6.jpeg",
            href: "https://www.google.com/",
            tags: ["WebRTC", "ReactJS"],
        },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                    {projectList.map((item, index) => (
                        <div key={item.id} className={`group block relative ${index % 2 === 0 ? 'cardAnimationLeft' : 'cardAnimationRight'}`}>
                            <a href={item.href || "#"} className="block">
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 sm:aspect-w-2 sm:aspect-h-3 relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="object-cover object-center w-full h-full"
                                    />
                                    {/* Overlay and Text */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 overlay">
                                        <span className="text-white text-lg font-semibold">View Project</span>
                                    </div>
                                </div>
                            </a>
                            <div className="flex justify-between items-start mt-4">
                                <div className="text-left" style={{ width: '13rem' }}>
                                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}