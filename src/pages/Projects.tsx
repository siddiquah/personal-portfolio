import React from 'react'
import Header from '../Components/Header'
import SideBar from '../Components/SideBar'
import { ProjectsHeading } from '../Components/ProjectsSection/ProjectsHeading'
import ProjectCard from '../Components/ProjectsSection/ProjectCard'

function Projects() {
    return (
        <div>
            <div className='w-screen'>
                <Header />
                <SideBar props="PROJECTS" />
            </div>
            <div className="ml-[90px]">
                <div className="mt-[90px]">
                    <ProjectsHeading />
                    <ProjectCard />
                </div>
            </div>
        </div>
    )
}

export default Projects