import { LuMail } from "react-icons/lu";
import DealIcon from "../assets/deal.png";

export default function Contact() {
    return (
        <section className="py-20 h-screen flex" id="contact">
            <div className="container mx-auto text-center p-10">
                <div className="flex flex-col items-center gap-8">
                    <div className="w-48 h-48 bg-slate-100 rounded-full flex items-center justify-center p-6">
                        <img src={DealIcon} alt="" className=""/>
                    </div>
                    <h2 className="text-5xl font-bold text-center mb-4">Tell me about your next project.</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="mailto:seboodogar@gmail.com?subject=Inquiry about collaboration&body=Hi Sohaib, I’d like to discuss..."
                            className="bg-[#6c55e1] text-white py-2 px-4 rounded-full flex items-center gap-2 hover:bg-[#5742d7] transition">
                            <LuMail className="text-lg" /> Email Me
                        </a>

                        <a href="https://wa.me/923080946477?text=Hi%20Sohaib,%20I’d%20like%20to%20discuss%20a%20project..." target="_blank" rel="noopener noreferrer"
                            className="py-2 px-4 border border-gray-400 rounded-full flex items-center hover:border-gray-600 transition">
                            WhatsApp
                        </a>
                    </div>  
                </div>
            </div>
        </section>
    );
}
