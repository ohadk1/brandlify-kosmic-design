
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

// Sample portfolio data
const portfolioItems = [
  {
    id: 1,
    title: 'Digituse - Digital Marketing',
    category: 'logo',
    image: '/digituse2fix.webp',
    description: 'עיצוב לוגו מודרני לחברת שיווק דיגיטלי',
  },
  {
    id: 2,
    title: 'Eleven House',
    category: 'logo',
    image: '/lovable-uploads/d0162bb1-61e6-4898-be1e-690605167f76.png',
    description: 'לוגו יוקרתי לחברת נדל"ן בצבע זהב',
  },
  {
    id: 3,
    title: 'דף נחיתה למוצר טכנולוגי',
    category: 'landing',
    image: 'https://via.placeholder.com/600x400/0D1117/FFFFFF?text=דף+נחיתה+טכנולוגי',
    description: 'דף נחיתה אינטראקטיבי להשקת מוצר טכנולוגי חדשני',
  },
  {
    id: 4,
    title: 'Sea-Port',
    category: 'logo',
    image: '/lovable-uploads/ea6aa2d8-3c2d-4a82-85a6-b1c9276449c2.png',
    description: 'לוגו לחברת ספנות המשלב אלמנטים ימיים',
  },
  {
    id: 5,
    title: 'חנות אונליין לתכשיטים',
    category: 'web',
    image: 'https://via.placeholder.com/600x400/0D1117/FFFFFF?text=חנות+תכשיטים',
    description: 'פיתוח חנות אינטרנטית מותאמת אישית',
  },
  {
    id: 6,
    title: 'דף נחיתה לאפליקציה',
    category: 'landing',
    image: 'https://via.placeholder.com/600x400/0D1117/FFFFFF?text=דף+נחיתה+אפליקציה',
    description: 'עיצוב דף נחיתה דינמי להורדת אפליקציה חדשה',
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const toggleDetails = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section id="portfolio" className="py-20 relative" aria-label="עבודות נבחרות">
      <div className="absolute inset-0 bg-space-dark z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-heading">עבודות נבחרות</h2>
        
        <div className="flex justify-center mb-12">
          <nav className="glass-card inline-flex p-1 rounded-full">
            <button
              onClick={() => setFilter('all')}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-colors",
                filter === 'all' 
                  ? "bg-gradient-to-r from-space-turquoise to-space-purple text-white" 
                  : "text-white hover:text-space-turquoise"
              )}
            >
              הכל
            </button>
            <button
              onClick={() => setFilter('web')}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-colors",
                filter === 'web' 
                  ? "bg-gradient-to-r from-space-turquoise to-space-purple text-white" 
                  : "text-white hover:text-space-turquoise"
              )}
            >
              אתרים
            </button>
            <button
              onClick={() => setFilter('logo')}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-colors",
                filter === 'logo' 
                  ? "bg-gradient-to-r from-space-turquoise to-space-purple text-white" 
                  : "text-white hover:text-space-turquoise"
              )}
            >
              לוגואים
            </button>
            <button
              onClick={() => setFilter('landing')}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-colors",
                filter === 'landing' 
                  ? "bg-gradient-to-r from-space-turquoise to-space-purple text-white" 
                  : "text-white hover:text-space-turquoise"
              )}
            >
              דפי נחיתה
            </button>
          </nav>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="glass-card overflow-hidden group relative"
              onClick={() => toggleDetails(item.id)}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t from-space-dark to-transparent p-6 flex flex-col justify-end transition-opacity duration-300",
                activeItem === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              )}>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                
                <div className={cn(
                  "transition-all duration-300 overflow-hidden",
                  activeItem === item.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center text-space-turquoise hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    צפייה בפרויקט
                    <ExternalLink className="mr-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
