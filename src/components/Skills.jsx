import ReactIcon from '../assets/icons/react.png';
import HTMLIcon from '../assets/icons/html.png';
import CSSIcon from '../assets/icons/css.png';
import JavaScriptIcon from '../assets/icons/js.png';
import NodeJSIcon from '../assets/icons/nodejs.png';
import TailwindIcon from '../assets/icons/tailwindcss.png';
import BootstrapIcon from '../assets/icons/bootstrap.png';
import WordPressIcon from '../assets/icons/wordpress.png';
import SQLIcon from '../assets/icons/sql.png';
import GitIcon from '../assets/icons/git.png';
import FigmaIcon from '../assets/icons/figma.png';

export default function Skills() {
    const skills = [
        { name: "React", icon: ReactIcon, proficiency: 70 },
        { name: "HTML5", icon: HTMLIcon, proficiency: 95 },
        { name: "CSS3", icon: CSSIcon, proficiency: 85 },
        { name: "JavaScript", icon: JavaScriptIcon, proficiency: 80 },
        { name: "Node.js", icon: NodeJSIcon, proficiency: 70 },
        { name: "Tailwind", icon: TailwindIcon, proficiency: 85 },
        { name: "WordPress", icon: WordPressIcon, proficiency: 75 },
        { name: "SQL", icon: SQLIcon, proficiency: 65 },
        { name: "Git", icon: GitIcon, proficiency: 85 },
        { name: "Figma", icon: FigmaIcon, proficiency: 80 },
        { name: "Bootstrap", icon: BootstrapIcon, proficiency: 75 },
    ];

    return (
        <section className="h-screen flex items-center justify-center text-center" id="skills">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-center mb-10">My Skills</h2>
                <h3 className="text-lg text-center my-5">Technologies and tools I excel at</h3>
                
                <div className="flex flex-wrap gap-8 justify-center">
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
