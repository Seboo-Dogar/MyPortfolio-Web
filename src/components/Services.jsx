import { FaArrowRight } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

// import WebDevIcon from '../assets/icons/web-development.png';
// import WebDesignIcon from '../assets/icons/web-design.png';
// import RebuildIcon from '../assets/icons/rebuild.png';

export default function Services() {
  const services = [
    {
      cardNumber: '01',
    //   icon: WebDevIcon,
      title: 'Web Development',
      description: 'Professional and responsive web development services to bring your ideas to life.',
      fiverrUrl: 'https://www.fiverr.com/yourprofile',
    },
    {
      cardNumber: '02',
    //   icon: WebDesignIcon,
      title: 'Web Design',
      description: 'Creative and modern web designs tailored to your needs and brand identity.',
      fiverrUrl: 'https://www.fiverr.com/yourprofile',
    },
    {
      cardNumber: '03',
    //   icon: RebuildIcon,
      title: 'Rebuild/Redesign',
      description: 'Revamp and modernize your website for better performance and aesthetics.',
      fiverrUrl: 'https://www.fiverr.com/yourprofile',
    },
  ];

  return (
    <section className="py-20 bg-slate-50" id="services">
      {/* Section Header */}
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">My Services</h2>
        <p className="text-gray-600">Discover the professional services I offer to enhance your web presence.</p>
      </div>

      {/* Services Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service) => (
          <div
            key={service.cardNumber}
            className="bg-white shadow-lg rounded-lg p-6 w-80 relative hover:shadow-2xl transition-shadow"
          >
            {/* Card Number */}
            <div className="absolute top-4 left-4 text-gray-500 text-xl font-bold">{service.cardNumber}</div>

            {/* Icon */}
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 bg-slate-100 flex items-center justify-center rounded-full">
                <img src="" alt={`${service.title} Icon`} className="w-8 h-8" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{service.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600 text-center mb-4">{service.description}</p>

            {/* Buttons */}
            <div className="flex justify-between items-center">
              <button className="flex items-center gap-2 bg-[#6c55e1] text-white py-2 px-4 rounded-md hover:bg-[#5740c5] transition">
                Get Service <FaArrowRight />
              </button>
              <a
                href={service.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full text-white text-lg hover:bg-green-600 transition"
              >
                <TiSocialTwitter />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
