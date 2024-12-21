import { GoArrowRight } from "react-icons/go";
import { TbBrandFiverr } from "react-icons/tb";
import WebDevIcon from '../assets/icons/webDevelopment.png';
import WebDesignIcon from '../assets/icons/webDesign.png';
import RebuildIcon from '../assets/icons/redesign.png';

export default function Services() {
  const services = [
    {
      cardNumber: '01',
      icon: WebDevIcon,
      title: 'Web Development',
      description: 'I provide professional and responsive web development services, ensuring your ideas come to life with modern and efficient solutions.',
      fiverrUrl: 'https://www.fiverr.com/',
    },
    {
      cardNumber: '02',
      icon: WebDesignIcon,
      title: 'Web Design',
      description: 'Creative and visually appealing web designs tailored to reflect your brand identity and meet your unique needs.',
      fiverrUrl: 'https://www.fiverr.com/',
    },
    {
      cardNumber: '03',
      icon: RebuildIcon,
      title: 'Web Rebuild/Redesign',
      description: 'Transform and modernize your existing website with enhanced performance, usability, and aesthetics to stay ahead of the competition.',
      fiverrUrl: 'https://www.fiverr.com/',
    },
  ];

  return (
    <section className="py-20 h-screen" id="services">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">My Services</h2>
        <p className="text-gray-600">Discover the professional services I offer to enhance your web presence.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service) => (
          <div
            key={service.cardNumber}
            className="bg-slate-100 shadow-md p-6 w-80 relative hover:shadow-lg transition-shadow">
          
            <div className="absolute top-4 left-4 text-xl font-bold">{service.cardNumber}</div>

            <div className="flex justify-center items-center my-4">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src={service.icon} alt={`${service.title} Icon`} className="w-20 h-20" />
              </div>
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-sm text-justify mb-4">{service.description}</p>

            <div className="flex justify-between items-center">
              <button className="flex items-center gap-2 bg-white py-2 px-4 rounded-full group" onClick={() => window.open(service.fiverrUrl, '_blank')}>
                Get Service <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </button>
              <a
                href={service.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 bg-green-400 rounded-full text-white text-lg hover:bg-green-600 transition">
                <TbBrandFiverr/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
