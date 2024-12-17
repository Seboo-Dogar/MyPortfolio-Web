import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="py-6">
            <div className="container mx-auto flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:space-y-0 md:text-left">
                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebook className="text-xl hover:text-[#6c55e1]" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter className="text-xl hover:text-[#6c55e1]" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin className="text-xl hover:text-[#6c55e1]" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub className="text-xl hover:text-[#6c55e1]" />
                    </a>
                </div>

                {/* Copyright */}
                <div>
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Sohaib Aslam. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
