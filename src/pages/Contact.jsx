import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen bg-[#80A1BA]/20">
      {/* Header Section with Animation */}
      <div className="w-full bg-gradient-to-r from-[#80A1BA] via-[#6B8CA8] to-[#5A7D99] py-16 px-4 animate-gradient">
        <h1 className="font-[font5] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-white animate-fade-in mt-40 ">
          Get in Touch
        </h1>
        <p className="font-[font6] text-lg sm:text-xl md:text-2xl lg:text-2xl text-center mt-5 px-4 text-white animate-slide-up">
          We're here to make your journey exceptional. <br className="hidden md:block" />
          Reach out to us anytime.
        </p>
      </div>

      {/* Contact Cards Section with Hover Effects */}
      <div className="w-full py-10 px-4 md:px-10">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-6xl mx-auto">
          
          {/* Phone Card */}
          <div className="flex-1 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 min-h-[250px] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-1 animate-fade-in-up cursor-pointer">
            <div className="animate-bounce-slow">
              <Phone className="w-16 h-16 md:w-20 md:h-20 text-white" />
            </div>
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-center text-white">Call Us</h2>
            <a href="tel:+1234567890" className="font-sans text-xl md:text-2xl text-center hover:underline text-white">
          0041782577372
            </a>
            <p className="font-sans text-base md:text-lg text-center text-white/90">
              Available 24/7
            </p>
          </div>

          {/* Email Card */}
          <div className="flex-1 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 min-h-[250px] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-1 animate-fade-in-up animation-delay-200 cursor-pointer">
            <div className="animate-bounce-slow animation-delay-100">
              <Mail className="w-16 h-16 md:w-20 md:h-20 text-white" />
            </div>
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-center text-white">Email Us</h2>
            <a href="mailto:info@ahbtransit.com" className="font-sans text-xl md:text-2xl text-center hover:underline text-white">
              info@ahb-transit.com
            </a>
            <p className="font-sans text-base md:text-lg text-center text-white/90">
              Quick response guaranteed
            </p>
          </div>

          {/* WhatsApp Card */}
          <div className="flex-1 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 min-h-[250px] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-1 animate-fade-in-up animation-delay-400 cursor-pointer">
            <div className="animate-bounce-slow animation-delay-200">
              <MessageCircle className="w-16 h-16 md:w-20 md:h-20 text-white" />
            </div>
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-center text-white">WhatsApp</h2>
            <a href="https://wa.me/0041782577372" target="_blank" rel="noopener noreferrer" className="font-sans text-xl md:text-2xl text-center hover:underline text-white">
              Message Us
            </a>
            <p className="font-sans text-base md:text-lg text-center text-white/90">
              Instant messaging
            </p>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="w-full py-10 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6 animate-slide-right ">
            <div className="animate-pulse">
              <MapPin className="w-10 h-10 md:w-12 md:h-12 text-[#80A1BA]" />
            </div>
            <h2 className="font-[font5]  text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-black">
              Our Location
            </h2>
          </div>
          
          <div className="bg-[#80A1BA] rounded-3xl p-6 md:p-8 transform transition-all duration-300 hover:shadow-2xl">
            <div className="mb-6">
              <h3 className="font-sans text-xl md:text-2xl font-bold mb-2 text-black">AHB-Transit Headquarters</h3>
              <p className="font-sans text-lg md:text-xl text-black/90">
            Zürichstrasse 23, 8600 Dübendorf
<br />
                Zurich, Switzerland 
              </p>
            </div>
            
            {/* Map Embed */}
            <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.7817300426923!2d8.612198476217847!3d47.39669147117139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa1093f17b807%3A0xaa39433a5c150446!2sZ%C3%BCrichstrasse%2023%2C%208600%20D%C3%BCbendorf%2C%20Switzerland!5e0!3m2!1sen!2s!4v1762157011273!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AHB Transit Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Operating Hours */}
      <div className="w-full py-10 px-4 md:px-10 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-orange-400 to-yellow-500 rounded-3xl p-8 md:p-10 transform transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Clock className="w-10 h-10 text-white animate-spin-slow" />
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white">
                Operating Hours
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-lg md:text-xl">
              <div className="flex justify-between border-b border-white/30 pb-3 text-white transform transition-all duration-300 hover:translate-x-2">
                <span className="font-bold">Monday - Friday</span>
                <span>24 Hours</span>
              </div>
              <div className="flex justify-between border-b border-white/30 pb-3 text-white transform transition-all duration-300 hover:translate-x-2">
                <span className="font-bold">Saturday</span>
                <span>24 Hours</span>
              </div>
              <div className="flex justify-between border-b border-white/30 pb-3 text-white transform transition-all duration-300 hover:translate-x-2">
                <span className="font-bold">Sunday</span>
                <span>24 Hours</span>
              </div>
              <div className="flex justify-between border-b border-white/30 pb-3 text-white transform transition-all duration-300 hover:translate-x-2">
                <span className="font-bold">Holidays</span>
                <span>24 Hours</span>
              </div>
            </div>
            <p className="font-sans text-center text-lg md:text-xl mt-8 font-bold text-white animate-pulse">
              We're always here for you! ✨
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-right {
          from { 
            opacity: 0;
            transform: translateX(-30px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
        
        .animate-slide-right {
          animation: slide-right 0.8s ease-out both;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}

export default Contact;