'use client';

import React, { useState, useEffect } from "react";
import { 
  Wrench, 
  Zap,
  Mail,
  Phone,
  MessageCircle,
  Car
} from "lucide-react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const launchDate = new Date("2025-12-15").getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = launchDate - now;

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = () => {
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-blue-50 overflow-hidden flex items-center justify-center relative">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Construction Elements */}
      <div className="absolute top-10 left-10 animate-float">
        <Wrench className="w-12 h-12 text-red-500 opacity-40 transform -rotate-45" />
      </div>
      <div className="absolute bottom-20 right-10 animate-bounce" style={{animationDuration: '3s'}}>
        <Zap className="w-16 h-16 text-orange-500 opacity-30" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-pulse">
        <Car className="w-20 h-20 text-red-400 opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        
        {/* Logo/Image Section */}
        <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0s'}}>
          <div className="w-24 h-24 mx-auto mb-6 bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform hover:scale-110 transition-transform duration-300 border-2 border-red-200">
            <img 
              src="/assets/images/regas-logo.jpg" 
              alt="Regas Autoshop Logo"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
        
        {/* Animated Coming Soon Badge */}
        <div className="mb-8 inline-block animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-orange-100 text-red-800 px-6 py-3 rounded-full text-sm font-bold font-['Outfit'] space-x-2">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
            <span>COMING SOON</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight font-['Outfit']">
            We're Building
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 block">Something Amazing</span>
          </h1>
          <p className="text-xl text-gray-600 font-['Outfit'] max-w-xl mx-auto">
            TheREGASgroup is under construction.
            <br />
            We're upgrading our site to users, establishing comfort and results.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <p className="text-gray-700 font-semibold mb-6 font-['Outfit']">Launching in:</p>
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {[
              { value: countdown.days, label: 'Days' },
              { value: countdown.hours, label: 'Hours' },
              { value: countdown.minutes, label: 'Minutes' },
              { value: countdown.seconds, label: 'Seconds' }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg transform hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                style={{animationDelay: `${0.4 + idx * 0.1}s`}}
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 font-['Outfit']">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-2 font-['Outfit']">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Email Signup */}
        <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <p className="text-gray-700 font-semibold mb-4 font-['Outfit']">Get notified when we launch</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl bg-white/70 backdrop-blur-sm border-2 border-blue-300 focus:border-blue-600 focus:outline-none transition-colors duration-200 font-['Outfit'] placeholder-gray-400"
              required
            />
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 transition-all duration-200 font-semibold whitespace-nowrap hover:shadow-lg transform hover:scale-105 font-['Outfit']"
            >
              {submitted ? '✓ Subscribed!' : 'Notify Me'}
            </button>
          </div>
          {submitted && (
            <p className="text-green-600 mt-3 text-sm font-['Outfit'] animate-pulse">
              Thank you! We'll notify you soon.
            </p>
          )}
        </div>

        {/* Contact Options */}
        <div className="animate-fade-in-up" style={{animationDelay: '0.9s'}}>
          <p className="text-gray-700 font-semibold mb-6 font-['Outfit']">Need us urgently? Get in touch</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <a 
              href="tel:+233203144536"
              className="flex items-center justify-center space-x-2 bg-white/60 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-200 font-semibold hover:scale-105 transform font-['Outfit']"
            >
              <Phone className="w-5 h-5" />
              <span>020 3144 536</span>
            </a>
            <a 
              href="tel:+233249567725"
              className="flex items-center justify-center space-x-2 bg-white/60 backdrop-blur-sm text-red-600 px-6 py-3 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-200 font-semibold hover:scale-105 transform font-['Outfit']"
            >
              <Phone className="w-5 h-5" />
              <span>024 956 7725</span>
            </a>
            <a 
              href="https://wa.me/233249567725"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-white/60 backdrop-blur-sm text-green-600 px-6 py-3 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-200 font-semibold hover:scale-105 transform font-['Outfit']"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}