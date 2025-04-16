
import React from 'react';
import { ArrowLeftCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with space theme */}
      <div className="absolute inset-0 bg-space-dark">
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-space-purple/30 to-transparent opacity-30" />
        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-space-turquoise/30 to-transparent opacity-30" />
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 text-center md:text-right mb-12 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-rubik leading-tight">
            <span className="text-white">מתמחים ב</span>
            <span className="block gradient-text">עיצוב ובניית אתרים</span>
            <span className="text-white">יצירתיים</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-assistant">
            בניית אתרים, לוגואים ודפי נחיתה בעיצוב קוסמי ומדויק – שילוב בין יצירתיות, טכנולוגיה וחוויית משתמש.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-space-turquoise to-space-purple text-white font-medium py-3 px-8 rounded-full text-lg transition-transform hover:scale-105 shadow-lg"
          >
            אני כאן בשביל העסק שלך 🚀
            <ArrowLeftCircle size={20} />
          </Link>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-start animate-float">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-64 h-64 md:w-96 md:h-96 object-contain"
            onError={(e) => {
              console.error("Video failed to load:", e);
              const target = e.target as HTMLVideoElement;
              target.style.display = 'none';
              const fallbackImg = target.nextElementSibling as HTMLImageElement;
              if (fallbackImg) fallbackImg.style.display = 'block';
            }}
          >
            <source src="/your-logo-animation.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <img
              src="/lovable-uploads/b1aeb872-4bf4-4299-83c9-d441cbf1e0bf.png"
              alt="BRANDLIFY לוגו"
              className="w-64 h-64 md:w-96 md:h-96 object-contain"
              style={{ display: 'none' }}
            />
          </video>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
