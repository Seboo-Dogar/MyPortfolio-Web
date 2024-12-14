import { FiArrowDown } from "react-icons/fi";
import { useRef } from "react";

export default function ScrollDownPage() {
    const targetRef = useRef(null);

    const scrollToSection = () => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gray-200 h-screen flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
                <p className="text-lg mt-4">Explore my work below</p>

                {/* Scroll Down Button */}
                <button
                    onClick={scrollToSection}
                    className="mt-10 bg-[#6c55e1] text-white px-4 py-2 rounded-full inline-flex items-center animate-bounce"
                >
                    Scroll Down <FiArrowDown className="ml-2" />
                </button>
            </section>

            {/* Target Section */}
            <section ref={targetRef} className="bg-gray-100 h-screen flex justify-center items-center">
                <h2 className="text-3xl font-semibold">My Work</h2>
            </section>
        </>
    );
}
