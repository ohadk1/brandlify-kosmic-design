
import React from 'react';
import { Monitor, Smartphone, Palette, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    icon: <Monitor className="w-12 h-12 text-space-turquoise" />,
    title: 'בניית אתרים',
    description: 'עיצוב ופיתוח אתרים מותאמים לכל סוגי העסקים, בדגש על חווית משתמש ועיצוב מודרני.',
    link: '/web-design',
    mockupImage: '/evenalevendesktop.png',
    mobileImage: '/evenalevenmobile.png',
  },
  {
    icon: <Code className="w-12 h-12 text-space-blue" />,
    title: 'דפי נחיתה',
    description: 'בניית דפי נחיתה אפקטיביים המותאמים למטרות השיווקיות שלך, עם דגש על המרות.',
    link: '/landing-pages',
    mockupImage: '/landing-mockup.png',
    mobileImage: '/landing-mobile.png',
  },
  {
    icon: <Palette className="w-12 h-12 text-space-purple" />,
    title: 'עיצוב לוגואים',
    description: 'יצירת לוגואים ייחודיים שמשקפים את הערכים והמסרים של העסק שלך בצורה ויזואלית מרשימה.',
    link: '/logo-design',
    logoImages: [
      '/lovable-uploads/728e1aba-f9f9-4b90-839f-bca47ec6d337.png',
      '/lovable-uploads/d0162bb1-61e6-4898-be1e-690605167f76.png',
      '/lovable-uploads/ea6aa2d8-3c2d-4a82-85a6-b1c9276449c2.png'
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden" aria-label="השירותים שלנו">
      <div className="absolute inset-0 bg-gradient-to-br from-space-darkPurple to-space-dark opacity-70 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-heading">השירותים שלנו</h2>
        
        <div className="mt-16 space-y-32">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className={`relative flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8`}
            >
              {/* Floating Title */}
              <div className={`absolute -top-10 md:top-[-30px] ${index % 2 === 0 ? 'right-0' : 'left-0'} z-20 bg-gradient-to-r from-space-purple to-space-turquoise p-1 rounded-lg shadow-xl`}>
                <div className="bg-space-dark px-6 py-3 rounded-md flex items-center gap-3">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              
              {/* Device Mockups or Logo Images */}
              {service.title !== 'עיצוב לוגואים' ? (
                <div className={`w-full md:w-2/3 relative h-auto md:h-[400px] flex flex-col items-center md:block`}>
                  {/* Desktop Mockup */}
                  <div className="relative md:absolute z-10 w-full max-w-[500px] h-[200px] md:h-[300px] md:right-0 md:top-0 bg-space-dark rounded-lg border-2 border-space-purple/30 overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.3)] mt-4 md:mt-0">
                    <div className="h-6 bg-space-darkPurple flex items-center px-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="h-[calc(100%-1.5rem)]">
                      <img
                        src={service.mockupImage}
                        alt={`${service.title} mockup`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Mobile Mockup */}
                  <div className="relative md:absolute z-20 w-[140px] h-[240px] md:left-10 md:bottom-0 bg-space-dark rounded-2xl border-4 border-space-turquoise/30 overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.3)] mt-6 md:mt-0">
                    <div className="h-4 bg-space-darkPurple flex items-center justify-center">
                      <div className="w-20 h-2 rounded-full bg-space-dark"></div>
                    </div>
                    <div className="h-[calc(100%-1rem)]">
                      <img
                        src={service.mobileImage}
                        alt={`${service.title} mobile`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                // Logo Design Images Display
                <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 md:mt-0">
                  {service.logoImages?.map((image, imgIndex) => (
                    <div key={imgIndex} className="aspect-square bg-space-dark rounded-lg border-2 border-space-purple/30 overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                      <img
                        src={image}
                        alt={`לוגו לדוגמה ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className={`w-full md:w-1/3 mt-12 md:mt-0 ${index % 2 === 0 ? 'md:order-first' : ''}`}>
                <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-space-turquoise to-space-purple text-white font-medium transition-transform hover:scale-105 shadow-lg"
                >
                  לפרטים נוספים
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
