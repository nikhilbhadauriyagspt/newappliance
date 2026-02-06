import React from 'react';
import { FaClipboardList, FaSearch, FaTools, FaCheckDouble } from 'react-icons/fa';

const steps = [
  {
    icon: <FaClipboardList />,
    title: "Book a Service",
    desc: "Simply fill out our online booking form or give us a call. Provide details about your appliance type and the issues you're facing. We'll schedule a time that works best for you."
  },
  {
    icon: <FaSearch />,
    title: "Expert Diagnosis",
    desc: "Our certified technician will arrive at your doorstep and perform a comprehensive inspection of your appliance to identify the root cause of the problem using advanced diagnostic tools."
  },
  {
    icon: <FaTools />,
    title: "Professional Repair",
    desc: "Once you approve the estimate, we proceed with the repair using 100% genuine spare parts. We focus on technical precision to ensure the repair lasts and your appliance runs efficiently."
  },
  {
    icon: <FaCheckDouble />,
    title: "Quality Check",
    desc: "After the repair, we perform multiple tests to ensure your appliance is fully functional and safe to use. We don't leave until you're satisfied with the results and the workspace is clean."
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20" data-aos="fade-up">
          <h6 className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">How It Works</h6>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Our Simple Repair Process</h2>
          <p className="text-gray-500 text-lg">We've streamlined our service to provide you with a hassle-free experience from booking to completion.</p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="w-20 h-20 bg-white border-4 border-gray-50 rounded-[2rem] flex items-center justify-center text-primary text-3xl mx-auto mb-8 shadow-xl group-hover:bg-secondary group-hover:text-white transition-all duration-500 rotate-45 group-hover:rotate-0">
                  <div className="-rotate-45 group-hover:rotate-0 transition-all duration-500">
                    {step.icon}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 group-hover:bg-white group-hover:shadow-2xl transition-all duration-500 h-full">
                   <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-6 shadow-lg">
                      {index + 1}
                   </div>
                   <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                   <p className="text-gray-500 text-sm leading-relaxed">
                     {step.desc}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center" data-aos="fade-up">
           <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 md:p-3 pr-8 rounded-[2rem] md:rounded-full border border-gray-100">
              <p className="text-gray-600 font-medium px-4">Ready to get your appliance fixed? Schedule a service with our expert team today.</p>
              <a href="#contact" className="text-primary font-bold uppercase tracking-widest text-xs border-b-2 border-secondary pb-1 hover:text-secondary transition-colors">Book Now &rarr;</a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Process;