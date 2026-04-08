import { skills } from "../data/skillsData";

export default function Skills() {
    return (
        <section className="lg:h-screen flex py-16 md:py-20" id="skills">
            <div className="container mx-auto  items-center justify-center text-center md:px-10 lg:px-5 gap-4">
                <h2 className="text-4xl lg:text-5xl font-bold">My Skills</h2>
                <p className="text-gray-600 my-5">Technologies and tools I excel at</p>
                
                <div className="flex flex-wrap gap-5 md:gap-8 justify-center">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center justify-between w-36 h-40 sm:w-36 sm:h-40 bg-slate-100 shadow p-4 hover:shadow-md transition-shadow duration-300 hover:scale-105 hover:bg-slate-50"
                            aria-label={`Skill card for ${skill.name}`}>
                            <div className="w-16 h-16 bg-white flex items-center justify-center p-2 rounded-full">
                                <img src={skill.icon} alt={`${skill.name} icon`} className="w-10 h-10" />
                            </div>
                            <p className="font-semibold">{skill.name}</p>
                            <p className="text-sm text-gray-600">{skill.proficiency}%</p>
                            <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                                <div
                                    className="bg-slate-700 h-2 rounded-full transition-all duration-700"
                                    style={{ width: `${skill.proficiency}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
