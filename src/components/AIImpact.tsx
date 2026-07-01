import { ArrowRight, Bot, Sparkles } from 'lucide-react';

export default function AIImpact() {
  return (
    <section className="py-24 bg-slate-50 text-brand-dark relative overflow-hidden" id="ai-impact">
      {/* Seamless transition from Hero section */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-brand-dark to-transparent opacity-10"></div>
      
      {/* Subtle background image/pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-multiply"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm border border-gray-100 text-brand-dark">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-bold tracking-widest uppercase">The Future is Here</span>
            </div>
            
            <a 
              href="https://news.google.com/search?q=AI%20Impact%20in%20Business" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight text-brand-dark transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] origin-left cursor-pointer hover:text-brand-blue"
            >
              AI Impact in the Modern Business World
            </a>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] origin-left cursor-default">
              Artificial Intelligence is reshaping the landscape of corporate finance, risk management, and strategic planning. From automated data analysis to predictive modeling, stay ahead of the curve by understanding how AI is driving unprecedented efficiency and innovation.
            </p>
            
            <a 
              href="#news" 
              className="inline-flex items-center px-6 py-3 bg-brand-dark text-white hover:bg-gray-800 font-semibold rounded-lg transition-colors group shadow-lg"
            >
              Discover more
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="relative hidden lg:block group cursor-pointer">
            <div className="aspect-square rounded-2xl overflow-hidden border border-gray-200 shadow-2xl relative bg-white transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]">
               <img 
                 src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" 
                 alt="AI Technology visualization"
                 className="w-full h-full object-cover opacity-90 mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-50/80 to-transparent transition-opacity duration-500 group-hover:opacity-60"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-400 rounded-full blur-[90px] opacity-30 transition-all duration-500 group-hover:opacity-50 group-hover:scale-125"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-brand-blue rounded-full blur-[90px] opacity-30 transition-all duration-500 group-hover:opacity-50 group-hover:scale-125"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
