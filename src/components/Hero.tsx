import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[450px] h-[65vh] md:h-screen md:min-h-[800px] flex items-center justify-start overflow-hidden pt-20 md:pt-32">
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 z-0 bg-cover bg-[center_top_20%] md:bg-center bg-no-repeat will-change-transform transform-gpu"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop")' }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/40 md:bg-black/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-dark/95 via-brand-dark/60 md:via-brand-dark/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] origin-left cursor-default">
            Navigate Your <br />
            <span className="text-4xl sm:text-5xl md:text-7xl text-white inline-block mt-1 sm:mt-2">
              Financial Future
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-2xl font-light leading-relaxed transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] origin-left cursor-default">
            Proper Finance provides elite strategy, corporate finance, and risk management consulting to help businesses and individuals achieve sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a 
              href="#services" 
              className="px-6 py-3 sm:px-8 sm:py-4 border border-white text-white font-medium tracking-wide text-sm hover:bg-white hover:text-brand-dark transition-colors flex items-center gap-2 group"
            >
              Discover how
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
