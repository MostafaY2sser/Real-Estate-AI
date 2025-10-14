import { FaHome, FaBuilding, FaKey, FaChartLine } from "react-icons/fa";
import "aos/dist/aos.css";
import ServiceCard from "./ServiceCard";



const services = [
  {
    id: 1,
    icon: <FaHome className="text-4xl text-blue-600" />,
    title: "Property Buying",
    description:
      "Find your dream home with the best locations, prices, and modern designs tailored to your needs.",
  },
  {
    id: 2,
    icon: <FaBuilding className="text-4xl text-blue-600" />,
    title: "Property Selling",
    description:
      "Sell your property quickly and for the best market value with our trusted real estate experts.",
  },
  {
    id: 3,
    icon: <FaKey className="text-4xl text-blue-600" />,
    title: "Property Renting",
    description:
      "Get the best rental options whether you’re looking for a short-term stay or a long-term home.",
  },
  {
    id: 4,
    icon: <FaChartLine className="text-4xl text-blue-600" />,
    title: "Investment Consulting",
    description:
      "We help you make smart investment decisions to maximize your property portfolio returns.",
  },
];

const ServicesSection = () => {
 

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Our <span className="text-blue-600">Services</span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          We provide a wide range of real estate services to help you buy, sell,
          rent, and invest in the best properties available.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
