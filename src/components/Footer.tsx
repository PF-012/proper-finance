import { useState } from 'react';
import { Linkedin, Mail, MapPin, Facebook, Instagram, X } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer id="contact" className="bg-white text-black pt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/proper-finance-logo.png" alt="Proper Finance Logo" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-black text-base leading-relaxed mb-6">
              Empowering organizations and individuals with strategic financial insights, risk management, and comprehensive corporate advisory services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-serif tracking-wide text-black">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-black hover:text-brand-blue transition-colors text-base">Home</a></li>
              <li><a href="#services" className="text-black hover:text-brand-blue transition-colors text-base">Our Services</a></li>
              <li><a href="#about" className="text-black hover:text-brand-blue transition-colors text-base">About Us</a></li>
              <li><a href="#reviews" className="text-black hover:text-brand-blue transition-colors text-base">Reviews</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-serif tracking-wide text-black">Contact Us</h4>
            <ul className="space-y-4 text-base text-black">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                <span>Address<br/>FD-83/A, Baguiati, Greater Kolkata Area, Pin Code - 700059</span>
              </li>
              <li className="flex items-center gap-3">
                <WhatsAppIcon className="h-5 w-5 text-brand-blue shrink-0" />
                <span>+91 8583090641</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-blue shrink-0" />
                <a href="mailto:techfin01.services@gmail.com" className="text-black hover:text-brand-blue transition-colors">techfin01.services@gmail.com</a>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="text-base font-bold mb-4 font-serif tracking-wide text-black uppercase">Follow Us</h4>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/share/1CU5e2Ca4g/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-100 hover:bg-[#1877F2] transition-colors rounded-full text-[#1877F2] hover:text-white group border border-gray-200">
                  <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.instagram.com/proper_finance_?igsh=MTE0cGc5Z2NjamU5bA==" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-100 hover:bg-[#E1306C] transition-colors rounded-full text-[#E1306C] hover:text-white group border border-gray-200">
                  <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://wa.me/918583090641" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-100 hover:bg-[#25D366] transition-colors rounded-full text-[#25D366] hover:text-white group border border-gray-200">
                  <WhatsAppIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Certification / Consultant Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-serif tracking-wide text-black">Connect</h4>
            <div className="bg-gray-50 p-6 border border-gray-200 rounded-lg">
              <p className="text-base text-black mb-2">Expert Advisory</p>
              <p className="text-lg font-semibold text-black mb-4">Certified by Yuvraj</p>
              <a 
                href="https://www.linkedin.com/in/atyourservice-yuvraj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0077b5] text-white text-base font-medium hover:bg-[#005e93] transition-colors rounded"
              >
                <Linkedin className="h-5 w-5" />
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-black font-medium text-base">
              &copy; {new Date().getFullYear()} Proper Finance Consultancy. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6 text-base text-black font-medium">
            <button onClick={() => setShowPrivacy(true)} className="hover:text-brand-blue transition-colors">Privacy Policy</button>
            <button onClick={() => setShowTerms(true)} className="hover:text-brand-blue transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[80vh] flex flex-col overflow-hidden text-brand-dark shadow-2xl relative">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h2 className="text-2xl font-bold font-serif">Privacy Policy</h2>
              <button onClick={() => setShowPrivacy(false)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-1 text-gray-600 space-y-4">
              <h3 className="font-bold text-gray-900 text-lg">1. Information We Collect</h3>
              <p>We may collect personal information such as your name, gmail address, phone number, and company details or any valid government document (Aadhar / Passport / Voter ID) any one of these and it should be verified via Digi-locker, when you engage with our services.</p>
              
              <h3 className="font-bold text-gray-900 text-lg">2. How We Use Your Information</h3>
              <p>The information we collect is used to provide, maintain, and improve our services, communicate with you about your inquiries, send you technical notices and updates, and comply with legal obligations.</p>
              
              <h3 className="font-bold text-gray-900 text-lg">3. Information Sharing</h3>
              <p>We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.</p>
              
              <h3 className="font-bold text-gray-900 text-lg">4. Data Security</h3>
              <p>We implement appropriate technical and organizational security measures designed to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.</p>
              
              <h3 className="font-bold text-gray-900 text-lg">5. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us at techfin01.services@gmail.com.</p>
            </div>
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
              <button onClick={() => setShowPrivacy(false)} className="px-6 py-2 bg-brand-blue text-white rounded-md font-medium hover:bg-blue-600 transition-colors">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[80vh] flex flex-col overflow-hidden text-brand-dark shadow-2xl relative">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h2 className="text-2xl font-bold font-serif">Terms of Service</h2>
              <button onClick={() => setShowTerms(false)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-1 text-gray-600 space-y-4">
              <h3 className="font-bold text-gray-900 text-lg">1. Agreement to Terms</h3>
              <p>By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
              
              <h3 className="font-bold text-gray-900 text-lg">2. Consulting Services</h3>
              <p>Proper Finance Consultancy provides strategic financial consulting, risk management, and corporate advisory services. The information provided through our services is for informational purposes only and should not be construed as legal, tax, or investment advice.</p>
              
              <h3 className="font-bold text-gray-900 text-lg">3. Client Responsibilities</h3>
              <p>Clients agree to provide accurate and complete information necessary for us to perform our consulting services. We are not responsible for errors resulting from inaccurate information provided by the client.</p>
              
              <h3 className="font-bold text-gray-900 text-lg">4. Intellectual Property</h3>
              <p>The service and its original content, features, and functionality are and will remain the exclusive property of Proper Finance Consultancy and its licensors. The service is protected by copyright, trademark, and other laws.</p>
              
              <h3 className="font-bold text-gray-900 text-lg">5. Limitation of Liability</h3>
              <p>In no event shall Proper Finance Consultancy, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
            </div>
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
              <button onClick={() => setShowTerms(false)} className="px-6 py-2 bg-brand-blue text-white rounded-md font-medium hover:bg-blue-600 transition-colors">Close</button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
