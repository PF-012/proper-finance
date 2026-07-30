import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, ArrowRight } from 'lucide-react';

const consultingServices = [
  {
    tag: 'PERSPECTIVE',
    title: 'Equity Research',
    description: 'In-depth analysis of financial statements, market trends, and valuation models to uncover high-potential equity investments.',
    image: '/Equity Img.png',
  },
  {
    tag: 'OUR TAKE',
    title: 'Corporate Finance',
    description: 'Optimize your capital structure, manage financial risk, and maximize shareholder value through strategic financial planning.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    tag: 'PLATFORM',
    title: 'Strategic Planning',
    description: 'Data-driven insights to define your long-term vision, assess market opportunities, and drive sustainable competitive advantage.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
  },
  {
    tag: 'COMPLIANCE',
    title: 'External Auditing',
    description: 'Independent examination of financial records to ensure accuracy, transparency, and compliance with statutory regulations.',
    image: 'https://www.tridenthotels.com/-/media/trident-hotel/webstories/best-restaurants-in-south-mumbai/frame-1.jpg',
  },
  {
    tag: 'CAPABILITY',
    title: 'Risk Management',
    description: 'Identify, evaluate, and mitigate financial and operational risks to protect your assets and ensure business continuity.',
    image: 'https://www.hbs.edu/ctfassets/public/images/14yzt4qCTTEOYl6fGqHGzb/risk-management.jpg',
  },
  {
    tag: 'INSIGHT',
    title: 'Investment Advisory',
    description: 'Tailored investment strategies designed to build and preserve wealth, leveraging comprehensive market analysis.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800',
  },
  {
    tag: 'STRATEGY',
    title: 'Tax & Accounting Strategy',
    description: 'Comprehensive tax planning and accounting solutions to improve cash flow and ensure regulatory compliance.',
    image: 'https://professionaltaxllc.com/wp-content/uploads/2023/08/client-portal.jpg',
  },
];

const specializedFields = [
  {
    title: 'Technical Fields',
    items: [
      'Advanced MS Excel',
      'Power Bi and Tableau',
      'PPT Presentations',
      'Coding for Automation',
      'Debugging Error',
      'Python + AI in Finance & Accounting (Both)'
    ]
  },
  {
    title: 'Financial Fields',
    items: [
      'Research Reports (Sell Side)',
      'Tally Prime',
      'Valuation',
      'Financial Reporting (DCF)',
      'Equity Research Reports (Buy Side) - Client Specific',
      'Budgeting Quarterly + Annually'
    ]
  },
  {
    title: 'Freelance Fields',
    items: [
      'Portfolio Building (B2C)',
      'Financial Modeler',
      'Fixed Asset Verification',
      'Financial Statements Reporting (P/L, BS, CF)',
      'Equity Reports (Major) as mentioned earlier.'
    ]
  },
];

export default function Services() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeConsultingModal, setActiveConsultingModal] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const scrollTimeoutRef = useRef<number | null>(null);

  const handleScroll = () => {
    if (scrollTimeoutRef.current === null) {
      scrollTimeoutRef.current = window.requestAnimationFrame(() => {
        if (scrollContainerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
          const maxScroll = scrollWidth - clientWidth;
          const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
          
          if (progressBarRef.current) {
            progressBarRef.current.style.left = `${progress * 75}%`;
          }
          
          // Calculate active index based on scroll position
          const itemWidth = scrollContainerRef.current.children[0]?.clientWidth || 1;
          // Add gap (24px = gap-6)
          const index = Math.round(scrollLeft / (itemWidth + 24));
          const newIndex = Math.min(index, consultingServices.length - 1);
          
          if (activeIndexRef.current !== newIndex) {
            activeIndexRef.current = newIndex;
            setActiveIndex(newIndex);
          }
        }
        scrollTimeoutRef.current = null;
      });
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth > 768 ? 420 : scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4 tracking-tight">Services</h2>
          <p className="text-red-600 font-medium text-base md:text-lg mt-2 border-l-4 border-red-600 pl-4 py-2 bg-red-50 inline-block pr-6 rounded-r-md">
            Note: We are not SEBI Registered Yet, So Except Equity Research and Investment Advisory service, others are available.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-24">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {consultingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveConsultingModal(service.title)}
                className="relative w-[85vw] min-w-[85vw] sm:w-[340px] sm:min-w-[340px] md:w-[360px] md:min-w-[360px] h-[400px] sm:h-[480px] snap-center shrink-0 cursor-pointer group/card overflow-hidden sm:rounded-3xl sm:shadow-lg sm:hover:shadow-2xl transition-all duration-500 sm:ring-1 sm:ring-black/5 bg-[#f4f4f4] sm:bg-transparent"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 transition-transform duration-700 group-hover/card:scale-105 will-change-transform transform-gpu"
                >
                 <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover/card:from-black/90 transition-colors duration-500"></div>

                {/* Content Box */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 sm:p-7 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 transition-all duration-500 group-hover/card:-translate-y-2 group-hover/card:shadow-[0_12px_40px_rgb(0,0,0,0.2)]">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-brand-blue mb-3 block">
                        {service.tag}
                      </span>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 leading-snug">
                        {service.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-50/80 flex items-center justify-center shrink-0 group-hover/card:bg-brand-blue transition-colors duration-300 shadow-sm border border-blue-100/50">
                      <ArrowRight className="w-4 h-4 text-brand-blue group-hover/card:text-white group-hover/card:-rotate-45 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Navigation Area */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-6 sm:gap-12 mt-4 pr-6">
            {/* Pagination Indicators */}
            <div className="flex items-center gap-4">
               <div className="flex items-center relative w-32 h-[2px]">
                 <div className="absolute inset-0 bg-gray-200"></div>
                 <div 
                   ref={progressBarRef}
                   className="absolute top-0 h-[2px] bg-[#60A5FA] transition-all duration-300"
                   style={{ width: '25%', left: '0%' }}
                 ></div>
               </div>
               <div className="flex items-center gap-1.5">
                 {consultingServices.map((_, idx) => (
                   <div 
                     key={idx}
                     className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-4 bg-[#60A5FA]' : 'w-2 bg-gray-300'}`}
                   ></div>
                 ))}
               </div>
            </div>
            
            {/* Nav Arrows */}
            <div className="flex gap-3">
              <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors bg-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors bg-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16 mt-16">
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6 tracking-tight">Specialized Fields</h3>
          <div className="h-1 w-20 bg-brand-blue mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specializedFields.map((field, index) => (
            <motion.div
              key={field.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveModal(field.title)}
              className="bg-white group hover:-translate-y-2 shadow-lg hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] transition-all duration-500 flex flex-col h-full rounded-3xl overflow-hidden cursor-pointer ring-1 ring-black/5"
            >
              <div className="p-8 pb-6 bg-gradient-to-br from-gray-50 to-white flex flex-col justify-center items-center text-center h-32 border-b border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold text-brand-dark font-serif leading-tight relative z-10">{field.title}</h3>
                {field.subtitle && <p className="text-brand-blue font-medium mt-1 relative z-10 text-base">{field.subtitle}</p>}
              </div>
              <div className="p-8 flex-1 flex flex-col bg-white">
                <ul className="space-y-5 flex-1 mb-8">
                  {field.items.slice(0, 2).map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-2 w-2 rounded-full bg-brand-blue mt-2.5 mr-3 shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                      <span className="text-gray-700 font-medium text-base md:text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                  <span className="text-brand-blue font-semibold text-sm tracking-wide group-hover:text-blue-700 transition-colors">
                    Read More Insights
                  </span>
                  <div className="w-10 h-10 rounded-full bg-blue-50/80 flex items-center justify-center shrink-0 group-hover:bg-brand-blue transition-colors duration-300 shadow-sm border border-blue-100/50">
                    <ArrowRight className="w-4 h-4 text-brand-blue group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Consulting Services Modal */}
      {activeConsultingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden text-brand-dark shadow-2xl relative">
            <div className="relative h-64 w-full">
                <img 
                src={consultingServices.find(s => s.title === activeConsultingModal)?.image}
                alt={activeConsultingModal || 'Service image'}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <button onClick={() => setActiveConsultingModal(null)} className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors">
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-white/80 mb-2 block">
                  {consultingServices.find(s => s.title === activeConsultingModal)?.tag}
                </span>
                <h2 className="text-3xl font-bold font-serif">{activeConsultingModal}</h2>
              </div>
            </div>
            <div className="p-8 overflow-y-auto flex-1 bg-white text-gray-700 text-lg leading-relaxed">
              <p>{consultingServices.find(s => s.title === activeConsultingModal)?.description}</p>
            </div>
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
              <a href="tel:8583090641" className="px-6 py-2 bg-brand-blue text-white rounded-md font-medium hover:bg-blue-600 transition-colors inline-flex items-center justify-center">Contact</a>
              <button onClick={() => setActiveConsultingModal(null)} className="px-6 py-2 bg-brand-dark text-white rounded-md font-medium hover:bg-gray-800 transition-colors">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Specialized Fields Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden text-brand-dark shadow-2xl relative">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <div>
                <h2 className="text-3xl font-bold font-serif">{activeModal}</h2>
                <p className="text-brand-blue font-medium text-base mt-1">
                  {specializedFields.find(f => f.title === activeModal)?.subtitle}
                </p>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-gray-200 rounded-full transition-colors self-start">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-1">
              <ul className="space-y-4">
                {specializedFields.find(f => f.title === activeModal)?.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-brand-blue mt-2.5 mr-3 shrink-0"></span>
                    <span className="text-gray-700 font-medium leading-relaxed text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
              <button onClick={() => setActiveModal(null)} className="px-6 py-2 bg-brand-blue text-white rounded-md font-medium hover:bg-blue-600 transition-colors">Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
