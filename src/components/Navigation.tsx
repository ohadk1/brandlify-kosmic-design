
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'דף הבית', path: '/' },
    { name: 'בניית אתרים', path: '/web-design' },
    { name: 'עיצוב לוגואים', path: '/logo-design' },
    { name: 'עבודות נבחרות', path: '/portfolio' },
    { name: 'למה לבחור בי', path: '/why-choose-me' },
    { name: 'צור קשר', path: '/contact' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12',
      scrolled ? 'bg-space-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="relative h-12 md:h-14">
            <video
              autoPlay
              muted
              loop
              playsInline
              className={`absolute inset-0 h-full object-contain ${!videoLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
              onLoadedData={() => setVideoLoaded(true)}
              onError={() => setVideoLoaded(false)}
            >
              <source src="/your-logo-animation.mp4" type="video/mp4" />
            </video>
            
            {!videoLoaded && (
              <img 
                src="/lovable-uploads/b1aeb872-4bf4-4299-83c9-d441cbf1e0bf.png" 
                alt="BRANDLIFY לוגו" 
                className="absolute inset-0 h-full object-contain"
              />
            )}
          </div>
          <span className="font-bold text-xl ml-2 font-rubik text-white">BRANDLIFY</span>
        </Link>

        <div className="hidden md:flex space-x-6 space-x-reverse">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white hover:text-space-turquoise transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-0 bg-space-dark/95 z-40 flex flex-col items-center justify-center md:hidden transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col items-center space-y-6 w-full">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white hover:text-space-turquoise transition-colors text-xl font-medium w-full text-center py-3"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
