import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] relative max-w-md mx-auto">
              <img 
                src="/proper-finance-logo.png" 
                alt="Proper Finance Logo" 
                className="object-contain w-full h-full shadow-2xl p-8 bg-white border border-gray-100 rounded-lg"
              />
              <div className="absolute -bottom-8 -right-8 bg-brand-blue p-8 shadow-xl hidden md:block rounded-bl-3xl rounded-tr-3xl">
                <p className="text-4xl font-bold text-white mb-1">2025</p>
                <p className="text-blue-200 text-sm uppercase tracking-wider">Founded</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-2 block">About Us</span>
            <h2 className="text-4xl font-serif font-bold text-brand-dark mb-6 leading-tight">
              Empowering Your Financial Journey
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                Founded in 2025, Proper Finance is an independent financial consulting brand dedicated to helping individuals and businesses navigate the complexities of today's economic landscape. Operating as a specialized freelance consultancy, we bring fresh perspectives and actionable, data-driven strategies to foster growth.
              </p>
              <p>
                Our approach combines deep industry knowledge with rigorous analytical capabilities. We are committed to providing personalized attention and dedicated support to every client, ensuring that your financial goals are met with clarity and confidence.
              </p>

              <button 
                onClick={() => setShowMore(!showMore)}
                className="inline-flex items-center gap-2 text-brand-blue font-medium hover:text-blue-700 transition-colors mt-2"
              >
                {showMore ? 'Show Less' : 'Know More'}
                {showMore ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <AnimatePresence>
                {showMore && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-5 text-base text-gray-700 flex items-start gap-4 mt-2">
                      <span className="text-xl shrink-0 mt-0.5">🌐</span>
                      <p className="leading-relaxed">
                        As a modern consultancy, we currently operate without a traditional registered office. We provide flexible, high-quality service to our clients on a <strong>remote basis</strong>, directly at <strong>your office location</strong>, or through <strong>scheduled in-person meetings</strong> tailored to your convenience.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-12 border-t border-gray-100 pt-10">
              <div className="text-center">
                <h4 className="text-5xl font-bold text-brand-blue mb-1">20+</h4>
                <p className="text-gray-500 font-medium md:text-base leading-snug">Clients Served In India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
