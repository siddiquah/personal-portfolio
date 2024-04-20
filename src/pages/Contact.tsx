import React from 'react';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Header from '../Components/Header';
import SideBar from '../Components/SideBar';
import '../Components/contact.css'

export default function Contact() {
    const navigate = useNavigate();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_73phy8b', 'template_yvvy84i', form.current, 'jowBbdTNUJbGnMK3s')
            .then(() => console.log('SUCCESS!'), (error) => console.log('FAILED...', error.text));
    };

    return (
        <div className="relative isolate bg-white h-screen w-screen overflow-hidden">
            <Header />
            <SideBar props="Contact" />
            <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 h-full animate-fade-in-up">
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48 h-full overflow-auto animate-fade-in-left">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu.
                        </p>
                        <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                            <div className="flex gap-x-4">
                                <BuildingOffice2Icon className="h-7 w-6 text-gray-400" />
                                <dd>545 Mavis Island, Chicago, IL 99191</dd>
                            </div>
                            <div className="flex gap-x-4">
                                <PhoneIcon className="h-7 w-6 text-gray-400" />
                                <dd><a href="tel:+1 (555) 234-5678">+1 (555) 234-5678</a></dd>
                            </div>
                            <div className="flex gap-x-4">
                                <EnvelopeIcon className="h-7 w-6 text-gray-400" />
                                <dd><a href="mailto:hello@example.com">hello@example.com</a></dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 h-full overflow-auto animate-fade-in-right">
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="user_name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="user_LastName"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="user_email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Phone number
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="tel"
                                        name="user_number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <button type="submit" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                                Send message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
