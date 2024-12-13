import { FiLinkedin } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";

export default function Main() {
    return (
        <>
        <section className="bg-gray-100 py-10 h-screen">
            <div className="container mx-auto">
                <div className="grid grid-cols-[1fr_2fr_4fr] auto-cols-auto">
                    <div className="space-x-4 my-auto">
                        <a href="https://www.linkedin.com/in/sohaib-aslam-dev/" className="" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
                        <a href="#" className="" target="_blank" rel="noopener noreferrer"><TfiWorld /></a>
                        <a href="https://github.com/Seboo-Dogar" className="" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
                    </div>
                    <div className="space-y-4 bg-slate-300">
                        <h1 className="text-5xl font-bold">Hi, I'm Sohaib</h1>
                        <h3 className="text-3x1 font-semibold">Frontend Developer</h3>
                        <p className="text-base">I specialize in crafting dynamic and responsive web applications, leveraging modern technologies to deliver high-quality, user-friendly designs and seamless functionality.</p>
                        <a href="./src/assets/MyCV.pdf" download="MyCV.pdf" className="bg-[#6c55e1] text-white py-2 px-4 rounded-lg inline-flex items-center">Download CV <FiDownload className="ml-2" /></a>
                    </div>
                    <div className="space-y-2 bg-slate-300">
                        <img src="./src/assets/Seboo.png" alt="Seboo Profile" className="w-40 h-40"/>
                    </div>
                </div>
            </div>
        </section>        
        </>
    );
};
