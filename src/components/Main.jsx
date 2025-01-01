import { FiLinkedin } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import { CgMouse } from "react-icons/cg";
import { TiArrowDown } from "react-icons/ti";

export default function Main() {
    const mangeScrolling = () => {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <section className="py-10 h-screen flex" id="home">
                <div className="container mx-auto flex justify-center items-center px-10 lg:px-5">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_3fr_4fr] gap-0 md:gap-6 items-center sm:py-20">
                        {/* Mobile-first: Image first */}
                        <div className="flex justify-center order-1 md:order-2 lg:order-3 pt-28 sm:pt-0">
                            <img
                                src="./src/assets/Seboo.png"
                                alt="Seboo Profile"
                                className="w-60 h-60 lg:w-80 lg:h-80 object-cover"
                            />
                        </div>

                        {/* Text part */}
                        <div className="space-y-2 sm:space-y-4 text-center md:text-left order-2 md:order-1 lg:order-2 md:pt-20">
                            <h1 className="text-4xl lg:text-5xl font-bold">Hi, I'm Sohaib</h1>
                            <h3 className="text-xl lg:text-2xl font-semibold">
                                Frontend Developer
                            </h3>
                            <p className="text-base leading-relaxed">
                                I specialize in crafting dynamic and responsive web applications,
                                leveraging modern technologies to deliver high-quality,
                                user-friendly designs and seamless functionality.
                            </p>

                            {/* Download Button */}
                            <a
                                href="./src/assets/MyCV.pdf"
                                download="MyCV.pdf"
                                className="bg-[#6c55e1] text-white py-2 px-4  rounded-full inline-flex items-center hover:bg-[#5742d7] transition"
                            >
                                Download CV <FiDownload className="ml-2" />
                            </a>

                            {/* Scroll Down */}
                            <div className="hidden sm:block">
                                <button
                                    onClick={mangeScrolling}
                                    className="inline-flex items-center lg:mt-40 animate-bounce outline-none"
                                >
                                    <CgMouse className="lg:mx-2 text-xl text-[#6c55e1]" /> 
                                    <span className="hidden lg:block">Scroll Down</span>
                                    <TiArrowDown />
                                </button>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex justify-center lg:flex-col md:flex-row space-x-4 md:space-x-4 lg:space-x-0 lg:space-y-4 order-3 md:order-2 lg:order-1 my-5 sm:my-0">
                            <a
                                href="https://www.linkedin.com/in/sohaib-aslam-dev/"
                                className="hover:text-[#6c55e1] text-xl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiLinkedin />
                            </a>
                            <a
                                href="#"
                                className="hover:text-[#6c55e1] text-xl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <TfiWorld />
                            </a>
                            <a
                                href="https://github.com/Seboo-Dogar"
                                className="hover:text-[#6c55e1] text-xl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
