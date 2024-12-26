import CountUp from "react-countup";
import { FaGithub } from "react-icons/fa";
import { GoRepo } from "react-icons/go";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { MdConnectWithoutContact } from "react-icons/md";

export default function About() {
    const stats = [
        { id: 1, value: 4, suffix: "+", label: "Years Experience" },
        { id: 2, value: 20, suffix: "+", label: "Projects Completed" },
      ];

    const cards = [
        {
            id: 1,
            icon: FaGithub,
            name: "Sohaib Aslam",
            idName: "Seboo-Dogar",
            title: "Frontend Web Developer | Graduated Software Engineer",
            extraInfo: "10+ Repositories",
            link: "https://github.com/Seboo-Dogar",
            extraIcon: GoRepo,
        },
        {
            id: 2,
            icon: TbBrandLinkedinFilled ,
            name: "Sohaib Aslam",
            idName: "sohaib-aslam-dev",
            title: "Connect with me on LinkedIn for professional updates.",
            extraInfo: "100+ Connections",
            link: "https://www.linkedin.com/in/sohaib-aslam-dev/",
            extraIcon: MdConnectWithoutContact ,
        },
    ];


    return (
        <section className="h-screen flex items-center justify-center text-center" id="about">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold mb-10">About Me</h2>
                <div className="flex space-x-10 justify-center">
                    <div className="bg-slate-100 space-y-5 text-justify p-10 w-full md:w-1/2">
                        <p>I am a passionate Front-End Developer with a BS in Software Engineering from the Virtual University of Pakistan. I specialize in crafting responsive and user-friendly web applications using technologies like HTML, CSS, JavaScript, ReactJS, TailwindCSS, Bootstrap, SQL, C++, WordPress, and Git & GitHub.I also have good knowledge of UI/UX design, enabling me to create visually appealing and intuitive interfaces.</p>
                        <p>Currently, I am expanding my expertise in full-stack development, driven by my commitment to continuous learning and innovation. With a strong foundation in modern development practices, I strive to deliver impactful and efficient solutions while contributing meaningfully to the tech industry.</p>
                        <p className="text-[#6c55e1] font-semibold">- Sohaib Aslam</p>
                    </div>
                    <div className="space-y-2 w-1/3">
                        <div className="flex space-x-10 justify-center py-6">
                            {stats.map((stat) => (
                            <div key={stat.id} className="text-center space-y-5">
                                <h2 className="text-5xl font-bold text-[#6c55e1]">
                                <CountUp end={stat.value} suffix={stat.suffix} duration={2}/>
                                </h2>
                                <p className="text-lg font-medium text-gray-700">{stat.label}</p>
                            </div>
                            ))}
                        </div>
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className="border p-2 text-left flex items-center space-x-4 cursor-pointer hover:shadow-md hover:bg-slate-50 transition-transform duration-300"
                                onClick={() => window.open(card.link, "_blank")}>
                                <div>
                                    <card.icon className="text-4xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">
                                        {card.name} &nbsp;
                                        <span className="font-thin text-sm">{card.idName}</span>
                                    </h3>
                                    <p className="text-sm">{card.title}</p>
                                    {card.extraIcon && <card.extraIcon className="inline-flex mr-1" />}
                                    {card.extraInfo && <label className="text-sm"> {card.extraInfo}</label>}
                                </div>
                            </div>
                        ))}
                        
                        {/* <div className="border p-2 text-left flex items-center space-x-4 cursor-pointer hover:shadow-md hover:bg-slate-50" onClick={() => window.open("https://github.com/Seboo-Dogar", "_blank")}>
                            <div className=""><FaGithub className="text-4xl"/></div>
                            <div className="">
                                <h3 className="font-semibold">Sohaib Aslam &nbsp;<span className="font-thin text-sm"> Seboo-Dogar</span></h3>
                                <p className="text-sm">Frontend Web Developer | Graduated Software Engineer</p>
                                <GoRepo className="inline-flex" /> <lable className="text-sm" >10+ Repositories</lable>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};
