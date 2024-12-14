import { FiLinkedin } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import { CgMouse } from "react-icons/cg";
import { TiArrowDown } from "react-icons/ti";

export default function Main() {
    return (
        <>
        <section className="py-10 h-screen">
            <div className="container mx-auto">
                <div className="grid grid-cols-[1fr_3fr_4fr] auto-cols-auto">
                    <div className="space-x-4 my-auto">
                        <a href="https://www.linkedin.com/in/sohaib-aslam-dev/" className="hover:text-[#6c55e1] text-xl" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
                        <a href="#" className="hover:text-[#6c55e1] text-xl" target="_blank" rel="noopener noreferrer"><TfiWorld /></a>
                        <a href="https://github.com/Seboo-Dogar" className="hover:text-[#6c55e1] text-xl" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
                    </div>
                    <div className="space-y-4 my-auto">
                        <h1 className="text-5xl font-bold">Hi, I'm Sohaib</h1>
                        <h3 className="text-3x1 font-semibold">Frontend Developer</h3>
                        <p className="text-base">I specialize in crafting dynamic and responsive web applications, leveraging modern technologies to deliver high-quality, user-friendly designs and seamless functionality.</p>
                        <a href="./src/assets/MyCV.pdf" download="MyCV.pdf" className="bg-[#6c55e1] text-white py-2 px-4 rounded-md inline-flex items-center">Download CV <FiDownload className="ml-2" /></a>
                        <div className="">
                            <button className="inline-flex items-center mt-40 animate-bounce outline-none"><CgMouse className="mx-2 text-xl text-[#6c55e1]" /> Scroll Down<TiArrowDown /></button>
                        </div>
                    </div>
                    <div className="space-y-2 my-auto">
                        <img src="./src/assets/Seboo.png" alt="Seboo Profile" className="w-80 h-80 mx-auto"/>
                    </div>
                </div>
            </div>
        </section>        
        </>
    );
};
