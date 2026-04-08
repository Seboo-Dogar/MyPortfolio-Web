import { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineBars3 } from "react-icons/hi2";
import { BsQrCodeScan } from "react-icons/bs";
import { sections } from "../data/nav";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  const handleQRClick = () => {
    const qrUrl = url || (typeof window !== "undefined" ? window.location.href : "");
    window.open(
      `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrUrl)}&size=200x200`,
      "_blank"
    );
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";

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
  }, []);

  return (
    <header className='py-5 fixed top-0 left-0 w-full z-50 bg-white'>
      <div className='container mx-auto flex justify-between items-center px-5'>
        <h1 className='text-2xl font-bold'>SOHAIB</h1>

        <button className="text-2xl md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu">
          {menuOpen ? <IoCloseOutline /> : <HiOutlineBars3 />}
        </button>

        <nav className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:items-center md:space-x-6 font-semibold transition-all duration-300 
          ${menuOpen ? "block" : "hidden"}`}>

          <ul className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-6">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={handleNavLinkClick}
                  className={`hover:underline ${
                    activeSection === section.id ? "text-[#6c55e1] font-bold" : ""
                  }`}
                >
                  {section.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  handleQRClick();
                }}
                className="block px-5 py-2 md:px-0 text-[#6c55e1] text-xl"
              >
                <BsQrCodeScan />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
