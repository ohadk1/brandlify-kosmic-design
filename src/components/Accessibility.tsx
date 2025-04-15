
import React, { useState } from 'react';
import { Accessibility as AccessibilityIcon, ChevronUp, Type, FileText, Contrast } from 'lucide-react';
import { cn } from '@/lib/utils';

const Accessibility = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(1);
  const [highContrast, setHighContrast] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const increaseFontSize = () => {
    if (fontSize < 1.5) {
      const newSize = fontSize + 0.1;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}rem`;
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 0.8) {
      const newSize = fontSize - 0.1;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}rem`;
    }
  };

  const resetFontSize = () => {
    setFontSize(1);
    document.documentElement.style.fontSize = '1rem';
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    if (!highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  };

  return (
    <>
      {highContrast && (
        <style jsx global>{`
          body.high-contrast {
            background-color: #000 !important;
            color: #fff !important;
          }
          
          body.high-contrast a, 
          body.high-contrast button,
          body.high-contrast h1,
          body.high-contrast h2,
          body.high-contrast h3,
          body.high-contrast h4,
          body.high-contrast h5,
          body.high-contrast h6 {
            color: #fff !important;
          }
          
          body.high-contrast .glass-card,
          body.high-contrast nav {
            background-color: #000 !important;
            border: 1px solid #fff !important;
          }
          
          body.high-contrast img {
            filter: grayscale(100%) contrast(120%);
          }
        `}</style>
      )}

      <div className="accessibility-container fixed bottom-5 right-5 z-50">
        <button
          onClick={toggleMenu}
          aria-label="אפשרויות נגישות"
          className="accessibility-button"
        >
          <AccessibilityIcon size={24} className="text-white" />
        </button>

        <div
          className={cn(
            'glass-card p-4 fixed right-5 transition-all duration-300 flex flex-col items-start space-y-3 min-w-[250px]',
            isOpen ? 'bottom-20 opacity-100' : 'bottom-0 opacity-0 pointer-events-none'
          )}
        >
          <div className="flex justify-between w-full items-center">
            <h3 className="text-white font-medium">הגדרות נגישות</h3>
            <button onClick={toggleMenu} aria-label="סגור תפריט נגישות">
              <ChevronUp size={20} className="text-white" />
            </button>
          </div>
          
          <div className="w-full border-t border-white/20 pt-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Type size={18} className="text-white ml-2" />
                <span className="text-white">גודל טקסט</span>
              </div>
              <div className="flex space-x-2 space-x-reverse">
                <button 
                  onClick={decreaseFontSize} 
                  className="w-8 h-8 rounded-full bg-space-purple/30 text-white flex items-center justify-center"
                  aria-label="הקטן טקסט"
                >
                  -
                </button>
                <button 
                  onClick={resetFontSize} 
                  className="text-xs text-white underline px-1"
                  aria-label="אפס גודל טקסט"
                >
                  איפוס
                </button>
                <button 
                  onClick={increaseFontSize} 
                  className="w-8 h-8 rounded-full bg-space-purple/30 text-white flex items-center justify-center"
                  aria-label="הגדל טקסט"
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Contrast size={18} className="text-white ml-2" />
                <span className="text-white">ניגודיות גבוהה</span>
              </div>
              <button 
                onClick={toggleHighContrast}
                className={cn(
                  "w-12 h-6 rounded-full flex items-center px-1 transition-colors",
                  highContrast ? "bg-space-turquoise justify-start" : "bg-gray-600 justify-end"
                )}
                aria-label={highContrast ? "בטל ניגודיות גבוהה" : "הפעל ניגודיות גבוהה"}
                role="switch"
                aria-checked={highContrast}
              >
                <div className={cn(
                  "w-4 h-4 rounded-full bg-white transition-transform",
                  highContrast ? "translate-x-5" : "translate-x-0"
                )} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessibility;
