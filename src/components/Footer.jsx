import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="border-t border-gray-300">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-center p-4 space-y-4">
                
                <div className="flex space-x-4 justify-center">
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

                <div>
                    <p className="text-xs lg:text-base md:text-sm text-gray-600">
                        &copy; {new Date().getFullYear()} Sohaib Aslam. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
