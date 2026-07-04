import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const logoImage = '/logo.png.jpeg';
const tridentLogo = '/Trident%20Logo.png';
const courseraLogo = '/Coursera.png';
const bcgLogo = '/certifications/bcg.png';
const mckinseyLogo = '/certifications/mckinsey.png';
const pwcLogo = '/certifications/pwc.png';
const oberoiLogo = '/certifications/oberoi.jpg';
const vedicLogo = '/certifications/vedic.png';

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
                Founded in 2025, Proper Finance is a dynamic financial consulting startup dedicated to helping individuals and businesses navigate the complexities of today's economic landscape. We bring fresh perspectives and actionable, data-driven strategies to foster growth.
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

            <div className="mt-12 flex flex-col xl:flex-row gap-8 items-center border-t border-gray-100 pt-10">
              <div className="xl:w-1/3 shrink-0 text-center xl:text-left">
                <h4 className="text-5xl font-bold text-brand-blue mb-1">20+</h4>
                <p className="text-gray-500 font-medium text-sm md:text-base leading-snug">Clients<br className="hidden xl:block" /> Served In India</p>
              </div>
              <div className="flex flex-col justify-center overflow-hidden relative w-full xl:w-2/3 bg-white rounded-2xl p-6">
                <p className="text-brand-dark font-semibold mb-6 uppercase tracking-widest text-xs text-center">Certified & Trusted By</p>
                <div className="w-full relative overflow-hidden">
                   {/* Marquee wrapper */}
                   <div className="flex w-max animate-marquee items-center">
                      {[1, 2].map((set) => (
                        <div key={set} className="flex gap-12 items-center shrink-0 pr-12">
                          <img src={bcgLogo} alt="BCG" className="h-14 md:h-16 w-auto object-contain transition-transform hover:scale-110 shrink-0 max-w-none" />
                          <img src={mckinseyLogo} alt="McKinsey" className="h-14 md:h-16 w-auto object-contain transition-transform hover:scale-110 shrink-0 max-w-none" />
                          <img src={pwcLogo} alt="PwC" className="h-14 md:h-16 w-auto object-contain transition-transform hover:scale-110 shrink-0 max-w-none" />
                          <img src={oberoiLogo} alt="The Oberoi Group" className="h-14 md:h-16 w-auto object-contain mix-blend-multiply transition-transform hover:scale-110 shrink-0 max-w-none" />
                          <img src={vedicLogo} alt="Vedic Yog Peeth" className="h-14 md:h-16 w-auto object-contain transition-transform hover:scale-110 shrink-0 max-w-none" />
                          <img src={courseraLogo} alt="Coursera" className="h-14 md:h-16 w-auto object-contain transition-transform hover:scale-110 shrink-0 max-w-none" />
                          <img src={tridentLogo} alt="Trident" className="h-14 md:h-16 w-auto object-contain transition-transform hover:scale-110 shrink-0 max-w-none" />
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
