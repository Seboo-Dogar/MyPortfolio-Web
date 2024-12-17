import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="">
            <div className="container mx-auto flex items-center justify-between text-center border-t p-6 border-gray-500">
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
                <div>
                    <p className="text-sm">&copy; {new Date().getFullYear()} Sohaib Aslam. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
