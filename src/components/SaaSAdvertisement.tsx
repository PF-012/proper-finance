import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SaaSAdvertisement() {
  const features = [
    "Real-time Financial Analytics",
    "Automated Portfolio Management",
    "Secure & Encrypted Transactions",
    "Simple Tax Reporting"
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Content */}
          <div className="p-10 lg:p-16 flex-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full text-brand-blue font-medium text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
                <span>Introducing PFC Financials Software</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-6 font-serif">
                Elevate your financial management with our exclusive platform.
              </h2>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Take full control of your financial journey with the PFC Financials SaaS platform. Designed for both individuals and businesses to track, analyze, and grow their assets seamlessly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://pfc-financials.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-brand-blue text-white rounded-md font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Start Using Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Image/Logo area */}
          <div className="lg:w-2/5 bg-gradient-to-br from-gray-50 to-gray-100 p-10 flex items-center justify-center border-l border-gray-100">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-sm aspect-square flex items-center justify-center bg-white rounded-full shadow-2xl p-0 group overflow-hidden"
            >
              <div className="absolute inset-0 border-4 border-dashed border-gray-200 rounded-full animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute inset-4 border-2 border-gray-50 rounded-full group-hover:scale-105 transition-transform duration-700"></div>
              <img 
                src="/Financials Logo.png" 
                alt="PFC Financials Software" 
                className="w-full h-full object-cover mix-blend-multiply relative z-10 scale-[1.05]"
              />
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none"></div>
    </section>
  );
}
