// import React from 'react';
import { FaRegMoon } from "react-icons/fa";



export default function Header() {
    return (
        <header className='py-5'>
            <div className='container mx-auto flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>SOHAIB</h1>
                <nav className=''>
                    <ul className="flex items-center space-x-6 font-semibold">
                        <li><a href="#home" className="hover:underline">Home</a></li>
                        <li><a href="#about" className="hover:underline">About</a></li>
                        <li><a href="#skills" className="hover:underline">Skills</a></li>
                        <li><a href="#services" className="hover:underline">Services</a></li>
                        <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                        <li><a href="#nightMood" className=""><FaRegMoon /></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
