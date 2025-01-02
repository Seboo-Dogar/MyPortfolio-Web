import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="border-t border-gray-300 py-6">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-center px-4">
                
                <div className="flex space-x-4 items-baseline">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebook className="text-xl hover:text-[#6c55e1] transition-colors" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter className="text-xl hover:text-[#6c55e1] transition-colors" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin className="text-xl hover:text-[#6c55e1] transition-colors" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub className="text-xl hover:text-[#6c55e1] transition-colors" />
                    </a>
                </div>

                <div className="mt-4 md:mt-0">
                    <p className="text-xs md:text-sm lg:text-base text-gray-600">
                        &copy; {new Date().getFullYear()} Sohaib Aslam. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
