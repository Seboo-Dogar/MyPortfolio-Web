import CountUp from "react-countup";

export default function About() {
    const stats = [
        { id: 1, value: 4, suffix: "+", label: "Years Experience" },
        { id: 2, value: 20, suffix: "+", label: "Projects Completed" },
      ];

    return (
        <section className="h-screen flex items-center justify-center text-center" id="about">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-10">About Me</h2>
                <div className="flex space-x-10 justify-center">
                    <div className="bg-slate-100 space-y-5 text-justify p-10 w-1/2">
                        <p>I am a passionate Front-End Developer with a BS in Software Engineering from the Virtual University of Pakistan. I specialize in crafting responsive and user-friendly web applications using technologies like HTML, CSS, JavaScript, ReactJS, TailwindCSS, Bootstrap, SQL, C++, WordPress, and Git & GitHub.I also have good knowledge of UI/UX design, enabling me to create visually appealing and intuitive interfaces.</p>
                        <p>Currently, I am expanding my expertise in full-stack development, driven by my commitment to continuous learning and innovation. With a strong foundation in modern development practices, I strive to deliver impactful and efficient solutions while contributing meaningfully to the tech industry.</p>
                        <p className="text-[#6c55e1] font-semibold">- Sohaib Aslam</p>
                    </div>
                    <div className="space-y-5 w-1/3">
                        <div className="flex space-x-10 justify-center py-10">
                            {stats.map((stat) => (
                            <div key={stat.id} className="text-center space-y-5">
                                <h2 className="text-5xl font-bold text-[#6c55e1]">
                                <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
                                </h2>
                                <p className="text-lg font-medium text-gray-700">{stat.label}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
