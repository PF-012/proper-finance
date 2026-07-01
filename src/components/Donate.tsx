import { useState, useEffect } from 'react';
import { Heart, ShieldCheck, QrCode } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function Donate() {
  const [showQR, setShowQR] = useState(false);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showQR) {
      timer = setTimeout(() => {
        setShowQR(false);
      }, 21000);
    }
    return () => clearTimeout(timer);
  }, [showQR]);

  const upiId = "mndl.yuvi@oksbi";
  const upiLink = `upi://pay?pa=${upiId}&pn=Yuvraj&cu=INR`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`;
  
  const whatsappNumber = "918583090641";
  const whatsappMessage = encodeURIComponent("Hi, I have just made a donation. Here is my payment screenshot for verification. My email address is: [Your Email]");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-24 bg-rose-50 text-brand-dark overflow-hidden relative" id="donate">
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1538356111053-748a48e1acb8?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-multiply"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-rose-100 rounded-full px-4 py-2 mb-6 text-rose-600">
            <Heart className="w-4 h-4 fill-current" />
            <span className="text-xs font-bold tracking-widest uppercase">Support a Social Cause</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6 tracking-tight">
            Make a Difference Today
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Your contribution helps us provide food and support to street dogs, handicapped individuals, and injured patients in need. Together, we can create a kinder world.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-rose-100">
          <div className="grid md:grid-cols-2">
            {/* Left Column: Info & WhatsApp */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold font-serif mb-6 text-brand-dark">Donation Verification</h3>
              
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  After completing your payment using the QR code or UPI link, it is <strong>mandatory</strong> to send us a screenshot of your successful transaction.
                </p>

                <div className="bg-rose-50 rounded-xl p-4 border border-rose-100">
                  <h4 className="font-semibold text-brand-dark flex items-center mb-2 text-sm">
                    <ShieldCheck className="w-4 h-4 mr-2 text-rose-600" />
                    How it works
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400 mt-1.5 mr-2 shrink-0"></span>
                      <span>Scan the QR code and complete your donation.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400 mt-1.5 mr-2 shrink-0"></span>
                      <span>Take a screenshot of the payment confirmation screen.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400 mt-1.5 mr-2 shrink-0"></span>
                      <span>Click the button below to send it to us via WhatsApp. <strong>Please mention your email address in the message.</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400 mt-1.5 mr-2 shrink-0"></span>
                      <span>We will personally email your receipt once verified.</span>
                    </li>
                  </ul>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-4 px-6 rounded-xl transition-colors flex justify-center items-center gap-3 shadow-md hover:shadow-lg"
                >
                  <WhatsAppIcon className="w-6 h-6 shrink-0" />
                  <span className="text-center">Send Screenshot on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Payment & QR */}
            <div className="p-8 md:p-12 bg-gray-50 border-l border-gray-100 flex flex-col justify-center items-center relative min-h-[400px]">
              <div className="text-center w-full animate-in fade-in zoom-in duration-300">
                <h4 className="text-lg font-bold text-brand-dark mb-4">Scan to Pay via UPI</h4>
                <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="h-5 object-contain" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" alt="PhonePe" className="h-6 object-contain" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" alt="Paytm" className="h-4 object-contain" />
                </div>
                
                <div className="bg-white p-4 rounded-2xl shadow-sm inline-block mb-6 border border-gray-100">
                  {showQR ? (
                    <img 
                      src={qrCodeUrl} 
                      alt="UPI QR Code" 
                      className="w-48 h-48 md:w-56 md:h-56 object-contain animate-in fade-in duration-500"
                    />
                  ) : (
                    <div 
                      onClick={() => setShowQR(true)}
                      className="w-48 h-48 md:w-56 md:h-56 flex flex-col justify-center items-center bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors animate-in fade-in duration-300"
                    >
                      <QrCode className="w-12 h-12 text-gray-400 mb-3" />
                      <span className="text-gray-600 font-medium text-sm">Tap to View QR</span>
                    </div>
                  )}
                </div>
                
                <a href={upiLink} className="bg-white px-4 py-3 rounded-lg border border-gray-200 inline-flex items-center mx-auto shadow-sm hover:border-brand-blue hover:shadow-md transition-all cursor-pointer group">
                  <span className="text-gray-500 text-sm mr-2 group-hover:text-brand-blue transition-colors">UPI ID:</span>
                  <span className="font-mono font-bold text-brand-dark group-hover:text-brand-blue transition-colors">{upiId}</span>
                </a>
                
                <div className="mt-8 flex justify-center gap-4">
                  <a 
                    href={upiLink}
                    className="md:hidden bg-brand-blue text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-md hover:bg-blue-600 transition-colors"
                  >
                    Pay Now with UPI App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
