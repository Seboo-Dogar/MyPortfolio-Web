export const githubLink = 'https://github.com/Seboo-Dogar';

export const projects = [
  {
    title: 'My Portfolio-Website',
    description:
      'A personal portfolio website built to showcase my skills, projects, and achievements as a web developer. Designed using modern technologies for an attractive and responsive user experience.',
    languages: ['HTML', 'JS', 'Tailwind', 'ReactJS'],
  },
  {
    title: 'Online Resume Builder-Web',
    description: 'An intuitive web-based resume builder for creating professional resumes.',
    languages: ['HTML', 'CSS', 'JS'],
  },
  {
    title: 'Get GitHub Account Info',
    description: 'A tool to fetch and display GitHub account information.',
    languages: ['HTML', 'CSS', 'ReactJS'],
  },
];

export function getLanguageColor(language) {
  const colors = {
    HTML: '#e44d26',
    CSS: '#2965f1',
    JS: '#f0db4f',
    ReactJS: '#61dafb',
  };

  return colors[language] || '#6b7280';
}
