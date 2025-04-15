
import React from 'react';
import { Code, Palette, Layout, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    icon: <Layout className="w-10 h-10 text-space-turquoise" />,
    title: 'בניית אתרים',
    description: 'עיצוב ופיתוח אתרים מותאמים לכל סוגי העסקים, בדגש על חווית משתמש ועיצוב מודרני.',
    link: '/web-design',
  },
  {
    icon: <Palette className="w-10 h-10 text-space-purple" />,
    title: 'עיצוב לוגואים',
    description: 'יצירת לוגואים ייחודיים שמשקפים את הערכים והמסרים של העסק שלך בצורה ויזואלית מרשימה.',
    link: '/logo-design',
  },
  {
    icon: <Code className="w-10 h-10 text-space-blue" />,
    title: 'דפי נחיתה',
    description: 'בניית דפי נחיתה אפקטיביים המותאמים למטרות השיווקיות שלך, עם דגש על המרות.',
    link: '/landing-pages',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden" aria-label="השירותים שלנו">
      <div className="absolute inset-0 bg-gradient-to-br from-space-darkPurple to-space-dark opacity-70 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-heading">השירותים שלנו</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-8 flex flex-col transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow">{service.description}</p>
              <Link 
                to={service.link}
                className="flex items-center text-space-turquoise hover:text-white transition-colors mt-auto"
              >
                לפרטים נוספים
                <ArrowLeft className="mr-2 w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
