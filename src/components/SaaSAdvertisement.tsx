import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, BarChart3, Database, ShieldCheck } from 'lucide-react';

export default function SaaSAdvertisement() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden border-y border-gray-100">
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-50 flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Logo and Visuals */}
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
             <img src="/hd-pfc-financials.png" alt="PFC Financials Logo" className="w-full max-w-[240px] h-auto object-contain mb-6" />
             <div className="flex gap-4 text-brand-blue">
                <div className="p-3 bg-blue-50 rounded-full"><BarChart3 className="w-6 h-6" /></div>
                <div className="p-3 bg-blue-50 rounded-full"><Database className="w-6 h-6" /></div>
                <div className="p-3 bg-blue-50 rounded-full"><ShieldCheck className="w-6 h-6" /></div>
             </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3">
            <div className="inline-block bg-brand-blue/10 text-brand-blue font-semibold px-4 py-1.5 rounded-full text-sm mb-6 tracking-wide">
              NEW SAAS PRODUCT
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
              Streamline Your Accounting with <span className="text-brand-blue">PFC Financials</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-2xl">
              Discover our new cloud-based accounting database designed for scale and security. 
              Manage ledgers, track cash flows, and generate real-time financial reports with enterprise-grade reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://pfc-financials.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Explore Database <ExternalLink className="w-5 h-5" />
              </a>
              <a 
                href="https://pfc-financials.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-dark border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:border-brand-blue hover:text-brand-blue transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
