
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Accessibility from '@/components/Accessibility';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample portfolio data
const portfolioItems = [
  {
    id: 1,
    title: 'Digituse - Digital Marketing',
    category: 'logo',
    image: '/digituse2fix.webp',
    description: 'עיצוב לוגו מודרני לחברת שיווק דיגיטלי, המשלב אייקון ייחודי עם טיפוגרפיה נקייה',
    tags: ['לוגו', 'מיתוג', 'שיווק דיגיטלי'],
  },
  {
    id: 2,
    title: 'Digituse - Variant',
    category: 'logo',
    image: '/lovable-uploads/027ddc50-1fac-435e-b043-51b0bca9f890.png',
    description: 'גרסה נוספת של לוגו Digituse המשלבת אלמנטים של טביעת אצבע וצמיחה',
    tags: ['לוגו', 'מיתוג', 'וריאציה'],
  },
  {
    id: 3,
    title: 'Eleven House',
    category: 'logo',
    image: '/lovable-uploads/d0162bb1-61e6-4898-be1e-690605167f76.png',
    description: 'לוגו יוקרתי לחברת נדל"ן המשלב אלמנטים ארכיטקטוניים בצבע זהב',
    tags: ['לוגו', 'מיתוג', 'נדל"ן'],
  },
  {
    id: 4,
    title: 'Health Fits - Sport Shop',
    category: 'logo',
    image: '/lovable-uploads/1b5acbcc-15bd-4862-8c3e-5f16df02540e.png',
    description: 'לוגו לחנות ספורט המשלב מגן וספורטאי בעיצוב דינמי',
    tags: ['לוגו', 'מיתוג', 'ספורט'],
  },
  {
    id: 5,
    title: 'Health Fits - Variant',
    category: 'logo',
    image: '/lovable-uploads/58440378-0467-4120-b559-4928877cbb66.png',
    description: 'גרסה נוספת של לוגו Health Fits המשלבת אלמנטים של כושר וספורט',
    tags: ['לוגו', 'מיתוג', 'כושר'],
  },
  {
    id: 6,
    title: 'O.C Crown Jewelry',
    category: 'logo',
    image: '/lovable-uploads/927927fa-5ff6-4272-a5df-ff988563c12e.png',
    description: 'לוגו יוקרתי לחנות תכשיטים המשלב כתר ויהלום בצבעי זהב',
    tags: ['לוגו', 'מיתוג', 'תכשיטים'],
  },
  {
    id: 7,
    title: 'Sea-Port',
    category: 'logo',
    image: '/lovable-uploads/ea6aa2d8-3c2d-4a82-85a6-b1c9276449c2.png',
    description: 'לוגו לחברת ספנות המשלב אלמנטים ימיים ומכולת משא',
    tags: ['לוגו', 'מיתוג', 'ספנות'],
  },
  {
    id: 8,
    title: 'עיצוב אתר למשרד עורכי דין',
    category: 'web',
    image: 'https://via.placeholder.com/800x600/0D1117/FFFFFF?text=אתר+משרד+עורכי+דין',
    description: 'אתר תדמית מודרני למשרד עורכי דין עם ממשק ניהול לקוחות מתקדם',
    tags: ['עיצוב אתר', 'UI/UX', 'תדמית'],
  },
  {
    id: 9,
    title: 'מיתוג לעסק קמעונאי',
    category: 'logo',
    image: 'https://via.placeholder.com/800x600/0D1117/FFFFFF?text=מיתוג+לעסק+קמעונאי',
    description: 'עיצוב לוגו ומיתוג מלא לרשת חנויות אופנה',
    tags: ['מיתוג', 'לוגו', 'קמעונאות'],
  },
  {
    id: 10,
    title: 'דף נחיתה למוצר טכנולוגי',
    category: 'landing',
    image: 'https://via.placeholder.com/800x600/0D1117/FFFFFF?text=דף+נחיתה+טכנולוגי',
    description: 'דף נחיתה אינטראקטיבי להשקת מוצר טכנולוגי חדשני',
    tags: ['דף נחיתה', 'UX/UI', 'טכנולוגיה'],
  },
  {
    id: 11,
    title: 'חנות אונליין לתכשיטים',
    category: 'web',
    image: 'https://via.placeholder.com/800x600/0D1117/FFFFFF?text=חנות+תכשיטים',
    description: 'פיתוח חנות אינטרנטית מותאמת אישית עם מערכת סליקה מאובטחת',
    tags: ['חנות אונליין', 'UI/UX', 'מסחר אלקטרוני'],
  },
  {
    id: 12,
    title: 'לוגו למסעדה איטלקית',
    category: 'logo',
    image: 'https://via.placeholder.com/800x600/0D1117/FFFFFF?text=לוגו+מסעדה',
    description: 'עיצוב לוגו בהשראה איטלקית אותנטית למסעדה יוקרתית',
    tags: ['לוגו', 'מיתוג', 'מסעדנות'],
  },
  {
    id: 13,
    title: 'דף נחיתה לאפליקציה',
    category: 'landing',
    image: 'https://via.placeholder.com/800x600/0D1117/FFFFFF?text=דף+נחיתה+אפליקציה',
    description: 'עיצוב דף נחיתה דינמי להורדת אפליקציה חדשה',
    tags: ['דף נחיתה', 'אפליקציה', 'שיווק'],
  },
  {
    id: 14,
    title: 'אתר תדמית לחברת נדל״ן',
    category: 'web',
    image: 'https://via.placeholder.com/800x600/0D1117/FFFFFF?text=אתר+נדלן',
    description: 'אתר מודרני לחברת נדל״ן עם ממשק חיפוש נכסים ואזור אישי',
    tags: ['אתר תדמית', 'נדל״ן', 'UI/UX'],
  },
  {
    id: 15,
    title: 'לוגו לחברת היי-טק',
    category: 'logo',
    image: 'https://via.placeholder.com/800x600/0D1117/FFFFFF?text=לוגו+הייטק',
    description: 'עיצוב זהות מותג לחברת סטארט-אפ בתחום הסייבר',
    tags: ['לוגו', 'מיתוג', 'טכנולוגיה'],
  },
  {
    id: 16,
    title: 'קמפיין פרסומי',
    category: 'landing',
    image: 'https://via.placeholder.com/800x600/0D1117/FFFFFF?text=קמפיין+פרסומי',
    description: 'עיצוב סדרת דפי נחיתה עבור קמפיין פרסומי מקיף',
    tags: ['קמפיין', 'פרסום', 'המרות'],
  },
];

const PortfolioPage = () => {
  useEffect(() => {
    document.title = 'עבודות נבחרות - BRANDLIFY';
  }, []);

  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);
    
  const selectedProject = selectedItem !== null
    ? portfolioItems.find(item => item.id === selectedItem)
    : null;

  return (
    <div className="min-h-screen relative bg-space-dark">
      <Navigation />
      
      <main>
        {/* Hero section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-space-purple/20 to-space-dark z-0"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-rubik leading-tight">
                <span className="text-white">העבודות</span>
                <span className="gradient-text block">הנבחרות שלנו</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                צפו באוסף מגוון של פרויקטים שהשלמנו - אתרים, לוגואים ודפי נחיתה. בכל פרויקט, אנו משלבים יצירתיות, פונקציונליות ותשומת לב לפרטים.
              </p>
            </div>
          </div>
        </section>
        
        {/* Portfolio Grid */}
        <section className="py-10 relative">
          <div className="container mx-auto px-6">
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
            
            {selectedItem === null ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <div 
                  key={item.id}
                  className="glass-card overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] relative"
                  onClick={() => setSelectedItem(item.id)}
                >
                  {/* עטיפה מיוחדת על התמונה עם אפקטי glow */}
                  <div className="relative w-full h-64 overflow-hidden">
                    {/* תמונה */}
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                    />
                
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500 shadow-[0_0_25px_5px_rgba(94,234,212,0.5)]"></div>
                  </div>
                
                  {/* שכבת טקסט עם קפיצה */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 translate-y-10 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold mb-3 text-white text-center">{item.title}</h3>
                    <p className="text-gray-300 mb-4 text-center">{item.description}</p>
                
                    <div className="flex flex-wrap gap-2 mt-4 justify-center">
                      {item.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="text-xs py-1 px-3 rounded-full bg-space-dark/50 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                ))}
              </div>
            ) : (
              <div className="glass-card p-6 md:p-10">
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="text-space-turquoise hover:text-white transition-colors flex items-center mb-8"
                >
                  <ArrowLeft className="ml-2 w-5 h-5" />
                  חזרה לכל הפרויקטים
                </button>
                
                {selectedProject && (
                  <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                      <div>
                        <img 
                          src={selectedProject.image} 
                          alt={selectedProject.title}
                          className="w-full rounded-lg shadow-lg"
                        />
                      </div>
                      
                      <div>
                        <h2 className="text-3xl font-bold mb-4 text-white">{selectedProject.title}</h2>
                        
                        <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                        
                        <div className="mb-6">
                          <h3 className="text-xl font-bold mb-3 text-white">אודות הפרויקט</h3>
                          <p className="text-gray-300">
                            זהו טקסט לדוגמה על הפרויקט, במקרה אמיתי יהיה כאן תיאור מפורט של האתגרים והפתרונות שיושמו בפרויקט. איך עבדנו עם הלקוח, מה היו הדרישות המיוחדות, ואיך יצרנו פתרון שעונה על הצרכים העסקיים.
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-8">
                          {selectedProject.tags.map((tag, index) => (
                            <span 
                              key={index}
                              className="text-sm py-1 px-3 rounded-full bg-space-dark/70 text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <a 
                          href="#"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-space-turquoise to-space-purple text-white font-medium py-2 px-6 rounded-lg transition-transform hover:scale-105"
                        >
                          צפה בפרויקט החי
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                    
                    <div className="mt-16">
                      <h3 className="text-2xl font-bold mb-6 text-white">פרויקטים דומים</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {portfolioItems
                          .filter(item => item.id !== selectedProject.id && item.category === selectedProject.category)
                          .slice(0, 3)
                          .map(item => (
                            <div 
                              key={item.id} 
                              className="glass-card overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
                              onClick={() => setSelectedItem(item.id)}
                            >
                              <div className="h-40 overflow-hidden">
                                <img 
                                  src={item.image} 
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              
                              <div className="p-4">
                                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-space-dark z-0"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="glass-card p-10 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 font-rubik text-white">
                רוצה לעבוד איתנו על הפרויקט הבא שלך?
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                אנו מתמחים ביצירת פתרונות דיגיטליים יצירתיים ומותאמים אישית. בואו ניצור משהו מדהים יחד!
              </p>
              
              <Link
                to="/contact"
                className="bg-gradient-to-r from-space-turquoise to-space-purple text-white font-medium py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105 shadow-lg"
              >
                נדבר על הפרויקט שלך
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <Accessibility />
    </div>
  );
};

export default PortfolioPage;
