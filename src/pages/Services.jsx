import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { 
  FaTools, FaSnowflake, FaTv, FaCoffee, FaPlug, FaWind, 
  FaMicrochip, FaBurn, FaWater, FaTshirt, FaFan, FaChevronRight,
  FaShieldAlt, FaClock, FaCheckCircle
} from 'react-icons/fa';

const iconMap = {
  FaTools: FaTools,
  FaSnowflake: FaSnowflake,
  FaTv: FaTv,
  FaCoffee: FaCoffee,
  FaPlug: FaPlug,
  FaWind: FaWind,
  FaMicrochip: FaMicrochip,
  FaBurn: FaBurn,
  FaWater: FaWater,
  FaTshirt: FaTshirt,
  FaFan: FaFan
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 -skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
              Our Professional <span className="text-secondary">Services</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              We provide expert repair and maintenance services for all your household and commercial appliances. 
              Our certified technicians ensure your equipment runs smoothly and efficiently.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <FaShieldAlt className="text-secondary" />
                <span className="text-white text-sm font-bold uppercase tracking-wider">Certified Experts</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <FaClock className="text-secondary" />
                <span className="text-white text-sm font-bold uppercase tracking-wider">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                <FaCheckCircle className="text-secondary" />
                <span className="text-white text-sm font-bold uppercase tracking-wider">Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const Icon = iconMap[service.iconName] || FaTools;
              return (
                <Link 
                  key={service.id} 
                  to={`/service/${service.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-white shadow-lg">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-black text-white uppercase tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {service.shortDesc}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-primary font-black uppercase text-xs tracking-[3px] group-hover:text-secondary transition-colors">
                        View Details
                      </span>
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all">
                        <FaChevronRight />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-[3rem] p-12 relative overflow-hidden text-center md:text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 md:flex items-center justify-between gap-12">
              <div className="mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase">
                  Need Immediate Repair Service?
                </h2>
                <p className="text-white/70 text-lg max-w-xl">
                  Contact us today and get your appliances fixed by our certified professional technicians.
                </p>
              </div>
              <Link 
                to="/contact" 
                className="inline-block bg-white text-primary hover:bg-secondary hover:text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-2xl"
              >
                Book An Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
