import React from "react";
import { NavLink } from 'react-router-dom';
import '../index.css';

function Header() {
    const Mailto = ({ email, subject = "", body = "", children }) => {
        let params = subject || body ? "?" : "";
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

        return <a href={`mailto:${email}${params}`}>{children}</a>;
    };
    const menu = [
        { id: 1, name: 'HOME', path: '/' },
        { id: 2, name: 'PROJECTS', path: '/projects' },
        { id: 3, name: 'CONTACT', path: '/contact' },
    ];

    return (
        <div className="flex items-center w-screen justify-between border-b-[1px] fixed bg-white" style={{ position: "fixed", width: "100%", top: 0, zIndex: 1000, background: 'white' }}>
            <div className="w-[90px] h-[90px] bg-black">
                <img src="/logo.jpg" alt="Logo" className="p-7 w-[90px] h-[90px]" />
            </div>
            <div className="hidden md:flex gap-14">
                {menu.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive
                                ? "text-black relative before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-green-600 before:rounded-full"
                                : "text-black hover:text-blue-500 transition duration-300 relative hover:before:content-[''] hover:before:absolute hover:before:left-[-10px] hover:before:top-1/2 hover:before:-translate-y-1/2 hover:before:w-2 hover:before:h-2 hover:before:bg-green-600 hover:before:rounded-full"
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>
            <Mailto
                email="siddiquahanjum111@gmail.com"
                subject="Email to Siddiquah"
                body="Hello!"
            >
                <div className="w-[90px] h-[90px] bg-red-500 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </div>
            </Mailto>
        </div>
    );
}

export default Header;
