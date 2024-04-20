import React from 'react';
import './projects.css'

export const ProjectsHeading = () => {
    return (
        <div className="px-20 py-20 slideUpAnimation">
            <div className="flex items-center justify-between">
                <div className="flex flex-col space-y-1">
                    <h1 className="text-7xl font-bold text-gray-800 mb-3">Crafted with Love.</h1>
                    {/* <h2 className=" ml-2 text-lg text-gray-400">Selection of my recent works</h2> */}
                </div>
                <div className="h-0.5 bg-gray-300 flex-grow mx-4"></div>
                <div className="w-4 h-4 bg-green-600 rounded-full"></div>
            </div>
        </div>
    );
}

