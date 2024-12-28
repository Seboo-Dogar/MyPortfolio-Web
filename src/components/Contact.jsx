import { LuMail } from "react-icons/lu";
import DealIcon from "../assets/deal.png";

export default function Contact() {
    return (
        <section className="py-20 min-h-screen flex items-center" id="contact">
            <div className="container mx-auto text-center px-6 md:px-10">
                <div className="flex flex-col items-center gap-8">
                    <div className="w-36 h-36 md:w-48 md:h-48 bg-slate-100 rounded-full flex items-center justify-center p-4 md:p-6">
                        <img src={DealIcon} alt="Handshake icon" className="w-3/4 h-3/4 object-contain"/>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 px-4">Tell me about your next project.</h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="mailto:seboodogar@gmail.com?subject=Inquiry about collaboration&body=Hi Sohaib, I’d like to discuss..."
                            aria-label="Email Sohaib Aslam"
                            className="bg-[#6c55e1] text-white py-2 px-4 rounded-full flex items-center gap-2 hover:bg-[#5742d7] transition text-sm sm:text-base">
                            <LuMail className="text-lg sm:text-lg" /> Email Me
                        </a>

                        <a href="https://wa.me/923080946477?text=Hi%20Sohaib,%20I’d%20like%20to%20discuss%20a%20project..." target="_blank" rel="noopener noreferrer"
                            aria-label="Message Sohaib Aslam on WhatsApp"
                            className="py-2 px-4 border border-gray-400 rounded-full flex items-center gap-2 hover:border-gray-600 transition text-sm sm:text-base">
                            WhatsApp
                        </a>
                    </div>  
                </div>
            </div>
        </section>
    );
}
