// import WebDesignIcon from '../assets/icons/web-design.png';
// import DevelopmentIcon from '../assets/icons/development.png';
// import SEOIcon from '../assets/icons/seo.png';
// import ECommerceIcon from '../assets/icons/ecommerce.png';
// import MaintenanceIcon from '../assets/icons/maintenance.png';
// import CustomSolutionsIcon from '../assets/icons/custom-solutions.png';

export default function Services() {
    const services = [
        {
            title: "Web Design",
            // icon: WebDesignIcon,
            description: "Crafting visually appealing and user-friendly designs that represent your brand.",
        },
        {
            title: "Web Development",
            // icon: DevelopmentIcon,
            description: "Building fast, scalable, and responsive websites with modern technologies.",
        },
        {
            title: "SEO Optimization",
            // icon: SEOIcon,
            description: "Improving your website's visibility and search engine rankings.",
        },
        {
            title: "E-Commerce Solutions",
            // icon: ECommerceIcon,
            description: "Developing robust online stores with seamless user experiences.",
        },
        {
            title: "Website Maintenance",
            // icon: MaintenanceIcon,
            description: "Ensuring your website stays updated, secure, and functional at all times.",
        },
        {
            title: "Custom Solutions",
            // icon: CustomSolutionsIcon,
            description: "Providing tailored solutions to meet your unique business needs.",
        },
    ];

    return (
        <section className="py-20 bg-gray-100" id="services">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-center mb-10">Our Services</h2>
                <p className="text-lg text-gray-600 text-center mb-16">
                    Explore the wide range of services we offer to help your business grow.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="w-20 h-20 bg-gray-100 flex items-center justify-center p-4 rounded-full mb-6">
                                <img src={service.icon} alt={`${service.title} icon`} className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
