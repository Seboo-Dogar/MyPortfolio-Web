import { FaGithub } from 'react-icons/fa';
import { GoRepo } from 'react-icons/go';
import { TbBrandLinkedinFilled } from 'react-icons/tb';
import { MdConnectWithoutContact } from 'react-icons/md';

export const aboutStats = [
  { id: 1, value: 4, suffix: '+', label: 'Years Experience' },
  { id: 2, value: 20, suffix: '+', label: 'Projects Completed' },
];

export const aboutCards = [
  {
    id: 1,
    icon: FaGithub,
    name: 'Sohaib Aslam',
    idName: 'Seboo-Dogar',
    title: 'Frontend Web Developer | Graduated Software Engineer',
    extraInfo: '10+ Repositories',
    link: 'https://github.com/Seboo-Dogar',
    extraIcon: GoRepo,
  },
  {
    id: 2,
    icon: TbBrandLinkedinFilled,
    name: 'Sohaib Aslam',
    idName: 'sohaib-aslam-dev',
    title: 'Connect with me on LinkedIn for professional updates.',
    extraInfo: '100+ Connections',
    link: 'https://www.linkedin.com/in/sohaib-aslam-dev/',
    extraIcon: MdConnectWithoutContact,
  },
];
