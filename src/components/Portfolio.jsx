import { useState } from 'react';
import { FiCopy } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";

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
      description: "An intuitive web-based resume builder for creating professional resumes.",
      thumbnail: "",
      languages: ["HTML", "JS", "Tailwind", "ReactJS"],
    },
    {
      title: "Online Resume Builder-Web", 
      description: "An intuitive web-based resume builder for creating professional resumes.",
      thumbnail: "",
      languages: ["HTML", "CSS", "JS"],
    },
    {
      // title: "FoodBuddy - Order/Deliver", 
      title: "Get GitHub Account Info", 
      description: "A tool to fetch and display GitHub account information.",
      thumbnail: "",
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
    <section className="py-20 h-screen" id="portfolio">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-5xl font-bold mb-4">Portfolio</h2>
        <div className="flex">
          <div className="w-1/2 space-y-5 text-left p-10">
            <p>This portfolio highlights some of my best work, showcasing the blend of creativity and technical expertise I bring to every project. 
              From elegant static websites to advanced React-based applications, my GitHub repositories feature a diverse range of projects that demonstrate my skills in front-end development.
              Each project is a testament to my proficiency in combining clean code with aesthetic design principles. I invite you to explore my repositories, including my latest creations, 
              where I have implemented cutting-edge technologies and best practices to solve real-world problems and enhance user experiences.
            </p>
            <div className="flex items-center justify-center">
              <div className='bg-slate-100 p-2 inline-flex rounded-full px-5'>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="hover:underline" >{githubLink}</a>
                <button onClick={handleCopy} className="ml-2 ">
                  {isCopied ? <FaCheck /> : <FiCopy />}
                </button>
              </div>
            </div>
          </div>
          <div className="basis-2/3 bg-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          {/* Thumbnail */}
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-40 object-cover"
          />
          
          {/* Content */}
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-4">
              {project.description || "No description available."}
            </p>
            
            {/* Languages */}
            <div className="flex flex-wrap gap-2">
              {project.languages.map((language, idx) => (
                <span
                  key={idx}
                  className="text-xs text-white px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: getLanguageColor(language),
                  }}
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
          </div>
        </div>
      </div>
    </section>
  );
}