import { FiLinkedin } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import { CgMouse } from "react-icons/cg";
import { TiArrowDown } from "react-icons/ti";

export default function Main() {

    const mangeScrolling = () => {
        document.getElementById("about").scrollIntoView({behavior: "smooth"})
    }

    return (
        <>
        <section className="py-10 h-screen flex" id="home">
            <div className="container mx-auto flex justify-center items-center px-5">
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_3fr_4fr] gap-6 items-center">
                    <div className="flex sm:flex-row lg:flex-col space-x-4 sm:space-x-4 lg:space-x-0 lg:space-y-4 justify-center sm:justify-start">
                        <a href="https://www.linkedin.com/in/sohaib-aslam-dev/" className="hover:text-[#6c55e1] text-xl" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
                        <a href="#" className="hover:text-[#6c55e1] text-xl" target="_blank" rel="noopener noreferrer"><TfiWorld /></a>
                        <a href="https://github.com/Seboo-Dogar" className="hover:text-[#6c55e1] text-xl" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
                    </div>

                    <div className="space-y-4 text-center lg:text-left pt-20">
                        <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Sohaib</h1>
                        <h3 className="text-2xl md:text-3xl font-semibold">Frontend Developer</h3>
                        <p className="text-base leading-relaxed">I specialize in crafting dynamic and responsive web applications, leveraging modern technologies to deliver high-quality, user-friendly designs and seamless functionality.</p>
                        <a href="./src/assets/MyCV.pdf" download="MyCV.pdf" className="bg-[#6c55e1] text-white py-2 px-4 rounded-full inline-flex items-center hover:bg-[#5742d7] transition">Download CV <FiDownload className="ml-2" /></a>
                        
                        <div className="">
                            <button onClick={mangeScrolling} className="inline-flex items-center mt-40 animate-bounce outline-none">
                                <CgMouse className="mx-2 text-xl text-[#6c55e1]" /> Scroll Down<TiArrowDown />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end pt-10">
                        <img src="./src/assets/Seboo.png" alt="Seboo Profile" className="w-60 h-60 md:w-80 md:h-80 object-cover"/>
                    </div>
                </div>
            </div>
        </section>        
        </>
    );
};
