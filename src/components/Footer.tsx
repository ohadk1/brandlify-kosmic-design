
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-space-darkPurple py-12 relative" aria-label="פוטר">
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/b1aeb872-4bf4-4299-83c9-d441cbf1e0bf.png" 
                alt="BRANDLIFY לוגו" 
                className="h-10 ml-2"
              />
              <span className="font-bold text-xl font-rubik text-white">BRANDLIFY</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              בניית אתרים, עיצוב לוגואים ודפי נחיתה באיכות גבוהה עם חווית משתמש מעולה.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-4 text-lg">קישורים מהירים</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-space-turquoise transition-colors">
                  דף הבית
                </Link>
              </li>
              <li>
                <Link to="/web-design" className="text-gray-400 hover:text-space-turquoise transition-colors">
                  בניית אתרים
                </Link>
              </li>
              <li>
                <Link to="/logo-design" className="text-gray-400 hover:text-space-turquoise transition-colors">
                  עיצוב לוגואים
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-space-turquoise transition-colors">
                  עבודות נבחרות
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-space-turquoise transition-colors">
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-4 text-lg">שירותים</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/web-design" className="text-gray-400 hover:text-space-turquoise transition-colors">
                  אתרי תדמית
                </Link>
              </li>
              <li>
                <Link to="/web-design" className="text-gray-400 hover:text-space-turquoise transition-colors">
                  חנויות אונליין
                </Link>
              </li>
              <li>
                <Link to="/landing-pages" className="text-gray-400 hover:text-space-turquoise transition-colors">
                  דפי נחיתה
                </Link>
              </li>
              <li>
                <Link to="/logo-design" className="text-gray-400 hover:text-space-turquoise transition-colors">
                  מיתוג עסקי
                </Link>
              </li>
              <li>
                <Link to="/web-design" className="text-gray-400 hover:text-space-turquoise transition-colors">
                  אתרים תדמיתיים
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-4 text-lg">צור קשר</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block mb-1 font-medium">טלפון:</span>
                <a href="tel:+972522174188" className="hover:text-space-turquoise transition-colors">
                  052-217-4188
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block mb-1 font-medium">אימייל:</span>
                <a href="mailto:contact@brandlify.co.il" className="hover:text-space-turquoise transition-colors">
                  contact@brandlify.co.il
                </a>
              </li>
              <li className="mt-6">
                <Link 
                  to="/contact"
                  className="inline-block py-2 px-4 bg-gradient-to-r from-space-turquoise to-space-purple rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                >
                  צור קשר עכשיו
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} BRANDLIFY. כל הזכויות שמורות.
          </p>
          
          <div className="flex space-x-3 space-x-reverse text-sm">
            <Link to="/privacy" className="text-gray-500 hover:text-space-turquoise transition-colors">
              מדיניות פרטיות
            </Link>
            <span className="text-gray-700">|</span>
            <Link to="/terms" className="text-gray-500 hover:text-space-turquoise transition-colors">
              תנאי שימוש
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
