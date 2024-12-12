import { FiLinkedin } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";

export default function Main() {
    return (
        <>
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center">
                    <div className="mb-6 space-x-4">
                        <a href="https://www.linkedin.com/in/sohaib-aslam-dev/" className="" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
                        <a href="#" className="" target="_blank" rel="noopener noreferrer"><TfiWorld /></a>
                        <a href="https://github.com/Seboo-Dogar" className="" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
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
