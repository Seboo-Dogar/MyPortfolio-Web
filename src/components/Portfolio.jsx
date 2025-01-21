import { useState } from 'react';
import { FiCopy } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";

export default function Portfolio() {
  const [isCopied, setIsCopied] = useState(false);
  const githubLink = 'https://github.com/Seboo-Dogar'; // Replace with your actual GitHub username

  const handleCopy = () => {
    navigator.clipboard.writeText(githubLink)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500); // Reset after 1.5 seconds
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  const projects = [
    {
      title: "My Portfolio-Website", 
      description: "A personal portfolio website built to showcase my skills, projects, and achievements as a web developer. Designed using modern technologies for an attractive and responsive user experience.",
      languages: ["HTML", "JS", "Tailwind", "ReactJS"],
    },
    {
      title: "Online Resume Builder-Web", 
      description: "An intuitive web-based resume builder for creating professional resumes.",
      languages: ["HTML", "CSS", "JS"],
    },
    {
      title: "Get GitHub Account Info", 
      description: "A tool to fetch and display GitHub account information.",
      languages: ["HTML", "CSS", "ReactJS"],
    },
  ];

  function getLanguageColor(language) {
    const colors = {
      HTML: "#e44d26",
      CSS: "#2965f1",
      JS: "#f0db4f",
      ReactJS: "#61dafb",
    };
    return colors[language] || "#6b7280"; // Default color (gray)
  }

  return (
    <section className="lg:h-screen flex py-16 md:py-20" id="portfolio">
      <div className="container mx-auto justify-center items-center text-center sm:px-10 lg:px-5">
        <h2 className="text-4xl lg:text-5xl font-bold mb-10">Portfolio</h2>

        <div className="flex flex-col items-center md:flex-row gap-12">
          <div className="md:w-1/2 space-y-5 ">
            <div className='text-justify space-y-6'>
              <p>This portfolio highlights some of my best work, showcasing the blend of creativity and technical expertise I bring to every project. 
                From elegant static websites to advanced React-based applications, my GitHub repositories feature a diverse range of projects that demonstrate my skills in front-end development.
              </p>
              <p>Each project is a testament to my proficiency in combining clean code with aesthetic design principles. I invite you to explore my repositories, including my latest creations, 
                where I have implemented cutting-edge technologies and best practices to solve real-world problems and enhance user experiences.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-slate-100 shadow p-2 inline-flex rounded-full px-5 w-auto">
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="hover:underline truncate">{githubLink}</a>
                
                <button onClick={handleCopy} aria-label="Copy GitHub link" className="ml-2">
                  {isCopied ? <FaCheck className="text-[#6c55e1]" /> : <FiCopy />}
                </button>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="space-y-3">
              {projects.map((project, index) => (
                <div key={index} className="flex flex-col bg-slate-100 p-4 shadow hover:shadow-md transition-shadow">
                  <div className="text-left">
                    <h3 className="font-semibold">{project.title}</h3>

                    <p className="text-gray-600 text-sm mb-3">
                      {project.description || "No description available."}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.languages.map((language, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-gray-800">
                          <span className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: getLanguageColor(language) }}
                          ></span>
                          <span>{language}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="https://github.com/Seboo-Dogar?tab=repositories" target="_blank" 
              className="bg-[#6c55e1] text-white py-2 px-6 rounded-full inline-flex items-center my-2 hover:bg-[#5742d7] transition text-sm sm:text-base"
              >
                See all <MdOpenInNew className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
