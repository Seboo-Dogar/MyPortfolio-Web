import { FiLinkedin } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";

export default function Main() {
    return (
        <>
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4 bg-slate-400">
                <div className="flex items-center justify-center">
                    <div className="space-x-4">
                        <a href="https://www.linkedin.com/in/sohaib-aslam-dev/" className="" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
                        <a href="#" className="" target="_blank" rel="noopener noreferrer"><TfiWorld /></a>
                        <a href="https://github.com/Seboo-Dogar" className="" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
                    </div>
                    <div className="space-y-2">
                        <h1>Hi, i am Sohaib</h1>
                        <h3>Frontend Developer</h3>
                        <p>High level experience in web design and development knowledge, producing quality work.</p>
                        <a href="./src/assets/MyCV.pdf" download="MyCV.pdf" className="bg-[#6c55e1] text-white py-2 px-4 rounded-lg inline-flex items-center">Download CV <FiDownload className="ml-2" /></a>
                    </div>
                    <div className="">
                        <img src="./src/assets/Seboo.png" alt="Seboo Profile" className="w-40 h-40"/>
                    </div>
                </div>
            </div>
        </section>        
        </>
    );
};
