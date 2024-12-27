import { useState, useEffect } from "react";
import { FaRegMoon } from "react-icons/fa";

export default function Header() {
    const [activeSection, setActiveSection] = useState("home");
    
    const sections = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Services", id: "services" },
        { name: "Portfolio", id: "portfolio" },
        { name: "Contact", id: "contact" },
      ];

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "home"; // Default section
            sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (
              element &&
              element.offsetTop <= window.scrollY + window.innerHeight / 3 &&
              element.offsetTop + element.offsetHeight > window.scrollY + window.innerHeight / 3
            ) {
              currentSection = section.id;
            }
            });
          setActiveSection(currentSection);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [sections]);

    return (
        <header className='py-5 fixed top-0 left-0 w-full z-50 bg-white'>
            <div className='container mx-auto flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>SOHAIB</h1>
                <nav className=''>
                    <ul className="flex items-center space-x-6 font-semibold">
                      {sections.map((section) => (
                        <li key={section.id}>
                            <a href={`#${section.id}`} className={`hover:underline ${
                            activeSection === section.id ? "text-[#6c55e1] font-bold" : ""
                            }`}>{section.name}</a>
                        </li>
                        ))}
                        <li>  
                          <a href="#nightMood"><FaRegMoon /></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
