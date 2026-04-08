import { GoArrowRight } from "react-icons/go";
import { TbBrandFiverr } from "react-icons/tb";
import { services } from "../data/servicesData";

export default function Services() {

  return (
    <section className="lg:h-screen flex py-16 md:py-20" id="services">
      <div className="container mx-auto px-4 text-center md:px-10 lg:px-5 gap-4">
        <h2 className="text-4xl lg:text-5xl font-bold">Services</h2>
        <p className="text-gray-600 text-base my-5">Discover the professional services I offer to enhance your web presence.</p>
      
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service) => (
            <div
              key={service.cardNumber}
              className="bg-slate-100 shadow p-6 w-80 relative hover:shadow-md transition-shadow duration-1000 transform hover:scale-105">
            
              <div className="absolute top-4 left-4 text-xl font-bold text-gray-600 px-2">{service.cardNumber}</div>

              <div className="flex justify-center items-center my-4">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img src={service.icon} alt={`${service.title} Icon`} className="w-full h-full" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-sm text-justify mb-4 text-gray-700">{service.description}</p>

              <div className="flex justify-between items-center">
                <button className="flex items-center gap-2 bg-white py-2 px-4 rounded-full group hover:shadow transition" onClick={() => window.open(service.fiverrUrl, '_blank')}>
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
      </div>
    </section>
  );
}
