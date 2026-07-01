import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Settings } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showManage, setShowManage] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', 'custom');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none"
        >
          <div className="max-w-7xl mx-auto flex justify-center lg:justify-end pointer-events-auto">
            <div className="bg-white/95 backdrop-blur-xl border border-gray-200 p-6 sm:p-8 rounded-2xl shadow-2xl max-w-2xl w-full text-brand-dark">
              {!showManage ? (
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-serif font-bold flex items-center gap-2">
                      <Settings className="w-5 h-5 text-gray-500" />
                      We value your privacy
                    </h3>
                    <button onClick={handleRejectAll} className="text-gray-400 hover:text-gray-600 transition-colors">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-base text-black leading-relaxed mb-6">
                    We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-end items-center w-full">
                    <button 
                      onClick={() => setShowManage(true)}
                      className="text-sm font-medium text-gray-600 hover:text-brand-dark transition-colors py-2 px-4 w-full sm:w-auto"
                    >
                      Manage Preferences
                    </button>
                    <button 
                      onClick={handleRejectAll}
                      className="text-sm font-medium border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors py-2 px-6 rounded-md w-full sm:w-auto"
                    >
                      Decline All
                    </button>
                    <button 
                      onClick={handleAcceptAll}
                      className="text-sm font-medium bg-brand-dark text-white hover:bg-gray-800 transition-colors py-2 px-6 rounded-md w-full sm:w-auto"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              ) : (
                <div className="animate-in fade-in duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-serif font-bold">Privacy Preference Center</h3>
                    <button onClick={() => setShowManage(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                    <div className="border border-gray-100 rounded-lg p-4 bg-gray-50">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-brand-dark">Strictly Necessary Cookies</h4>
                        <span className="text-xs font-medium bg-brand-blue/10 text-brand-blue px-2 py-1 rounded">Always Active</span>
                      </div>
                      <p className="text-sm text-black mt-1">These cookies are necessary for the website to function and cannot be switched off in our systems.</p>
                    </div>

                    <div className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-brand-dark">Performance Cookies</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-blue"></div>
                        </label>
                      </div>
                      <p className="text-sm text-black mt-1">These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.</p>
                    </div>

                    <div className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-brand-dark">Targeting Cookies</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-blue"></div>
                        </label>
                      </div>
                      <p className="text-sm text-black mt-1">These cookies may be set through our site by our advertising partners to build a profile of your interests.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end border-t border-gray-100 pt-6">
                    <button 
                      onClick={handleSavePreferences}
                      className="text-sm font-medium bg-brand-dark text-white hover:bg-gray-800 transition-colors py-2 px-6 rounded-md w-full sm:w-auto"
                    >
                      Confirm My Choices
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
