import { useState, useEffect, useRef } from 'react';
import { Menu, X, Search } from 'lucide-react';

const logoImage = '/logo.png.jpeg';

const searchIndex = [
  { title: 'Home', type: 'Section', href: '#home' },
  { title: 'AI Impact', type: 'Section', href: '#ai-impact' },
  { title: 'Services', type: 'Section', href: '#services' },
  { title: 'News', type: 'Section', href: '#news' },
  { title: 'About Us', type: 'Section', href: '#about' },
  { title: 'Reviews', type: 'Section', href: '#reviews' },
  { title: 'Contact', type: 'Section', href: '#contact' },
  { title: 'Corporate Finance', type: 'Consulting', href: '#services' },
  { title: 'Strategic Planning', type: 'Consulting', href: '#services' },
  { title: 'External Auditing', type: 'Consulting', href: '#services' },
  { title: 'Risk Management', type: 'Consulting', href: '#services' },
  { title: 'Investment Advisory', type: 'Consulting', href: '#services' },
  { title: 'Equity Research', type: 'Consulting', href: '#services' },
  { title: 'Tax & Accounting Strategy', type: 'Consulting', href: '#services' },
  { title: 'Technical Fields', type: 'Specialized', href: '#services' },
  { title: 'Financial Fields', type: 'Specialized', href: '#services' },
  { title: 'Freelance Fields', type: 'Specialized', href: '#services' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // Prevent duplicate injections
    if (!document.getElementById('google-translate-script')) {
      (window as any).googleTranslateElementInit = () => {
        if ((window as any).google && (window as any).google.translate) {
          new (window as any).google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,hi,bn,ta,te,mr,gu,raj',
              layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            'google_translate_element'
          );
        }
      };

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white flex flex-col ${
        isScrolled ? 'top-0 shadow-md' : 'top-0 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-2 group">
              <img src={logoImage} alt="Proper Finance Logo" className="h-12 md:h-16 w-12 md:w-16 object-contain rounded-full" />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-end mr-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide uppercase transition-colors text-brand-dark hover:text-brand-blue"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <a 
                href="#donate" 
                className="bg-brand-blue text-white px-5 py-2 rounded-lg text-sm font-semibold tracking-wide hover:bg-blue-600 transition-colors shadow-sm"
              >
                Donate
              </a>
            </div>
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-brand-dark hover:text-brand-blue transition-colors rounded-full hover:bg-gray-100"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 md:w-96 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 transform origin-top-right transition-all">
                  <div className="p-3 border-b border-gray-50 flex items-center bg-gray-50/50">
                    <Search className="w-4 h-4 text-gray-400 mr-2" />
                    <input
                      type="text"
                      placeholder="Search services, sections..."
                      className="w-full bg-transparent border-none focus:ring-0 text-sm outline-none text-brand-dark placeholder-gray-400"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                    {searchQuery && (
                      <button onClick={() => setSearchQuery('')} className="p-1 hover:bg-gray-200 rounded-full text-gray-400">
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                  <div className="max-h-[60vh] overflow-y-auto">
                    {searchIndex
                      .filter(item => 
                        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        item.type.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                      .map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery('');
                          }}
                          className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 group"
                        >
                          <span className="text-sm font-medium text-brand-dark group-hover:text-brand-blue">{item.title}</span>
                          <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400 bg-gray-100 px-2 py-1 rounded-full">{item.type}</span>
                        </a>
                      ))}
                    {searchQuery && searchIndex.filter(item => 
                      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                      item.type.toLowerCase().includes(searchQuery.toLowerCase())
                    ).length === 0 && (
                      <div className="p-6 text-center text-gray-500 text-sm">
                        No results found for "{searchQuery}"
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-brand-dark"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-brand-blue hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <a 
                href="#donate" 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-brand-blue text-white px-5 py-3 rounded-lg text-base font-semibold tracking-wide hover:bg-blue-600 transition-colors shadow-sm mt-2"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
