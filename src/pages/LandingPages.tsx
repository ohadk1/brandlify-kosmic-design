
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Accessibility from '@/components/Accessibility';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  BarChart3, 
  Smartphone, 
  Globe, 
  Clock, 
  TrendingUp, 
  ShoppingCart,
  LayoutPanelTop
} from 'lucide-react';

const LandingPages = () => {
  useEffect(() => {
    document.title = 'דפי נחיתה - BRANDLIFY';
  }, []);

  const advantages = [
    {
      icon: <TrendingUp className="w-10 h-10 text-space-turquoise" />,
      title: 'המרות גבוהות',
      description: 'דפי הנחיתה שלנו מתוכננים להשיג שיעורי המרה גבוהים ולהשיג את המטרות העסקיות שלך.'
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-space-purple" />,
      title: 'ניתוח מתקדם',
      description: 'אנו משלבים כלי ניתוח שיאפשרו לך לעקוב אחר הביצועים ולשפר את האסטרטגיה שלך.'
    },
    {
      icon: <Smartphone className="w-10 h-10 text-space-blue" />,
      title: 'מותאם למובייל',
      description: 'כל דפי הנחיתה שלנו בנויים בצורה רספונסיבית לחוויה מושלמת בכל מכשיר.'
    },
    {
      icon: <Globe className="w-10 h-10 text-space-pink" />,
      title: 'מותאם ל-SEO',
      description: 'אנו בונים את דפי הנחיתה עם התייחסות לקידום אורגני במנועי החיפוש.'
    },
    {
      icon: <Clock className="w-10 h-10 text-space-turquoise" />,
      title: 'זמני טעינה מהירים',
      description: 'דפי נחיתה מהירים משפרים את חווית המשתמש ואת שיעורי ההמרה.'
    },
    {
      icon: <LayoutPanelTop className="w-10 h-10 text-space-purple" />,
      title: 'עיצוב ממוקד מטרה',
      description: 'כל אלמנט בדף מתוכנן כדי להוביל את המשתמש לפעולה הרצויה.'
    }
  ];

  const landingPageTypes = [
    {
      title: 'דפי נחיתה לשיווק מוצרים',
      description: 'דפים ייעודיים להצגת מוצרים חדשים, עם דגש על יתרונות ומאפיינים ייחודיים.',
      icon: <ShoppingCart className="w-12 h-12 text-space-turquoise" />
    },
    {
      title: 'דפי הרשמה לאירועים',
      description: 'דפי נחיתה שמעודדים הרשמה לכנסים, וובינרים או אירועים מיוחדים.',
      icon: <Clock className="w-12 h-12 text-space-purple" />
    },
    {
      title: 'דפי הרשמה לניוזלטר',
      description: 'דפים פשוטים וממוקדים שמטרתם לאסוף כתובות אימייל לרשימת התפוצה שלך.',
      icon: <Globe className="w-12 h-12 text-space-blue" />
    },
    {
      title: 'דפי הורדת אפליקציות',
      description: 'דפי נחיתה שנועדו לקדם ולהגדיל את מספר ההורדות של אפליקציות.',
      icon: <Smartphone className="w-12 h-12 text-space-pink" />
    }
  ];

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
                <span className="gradient-text">דפי נחיתה</span>
                <span className="text-white block">שמשיגים תוצאות</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                דפי נחיתה אפקטיביים הם כלי חיוני לכל קמפיין שיווקי מוצלח. אנו מתמחים ביצירת דפי נחיתה ממוקדים שממירים מבקרים ללקוחות.
              </p>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-space-turquoise to-space-purple text-white font-medium py-3 px-8 rounded-full text-lg transition-transform hover:scale-105 shadow-lg"
              >
                רוצה דף נחיתה אפקטיבי?
                <ArrowLeft size={20} />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Advantages */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <h2 className="section-heading">היתרונות שלנו</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="glass-card p-8 flex flex-col transition-transform duration-300 hover:translate-y-[-5px]"
                >
                  <div className="mb-5">{advantage.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{advantage.title}</h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Landing Page Types */}
        <section className="py-20 relative bg-space-darkPurple">
          <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent z-0"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="section-heading">סוגי דפי נחיתה</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {landingPageTypes.map((type, index) => (
                <div
                  key={index}
                  className="glass-card p-8 flex items-start"
                >
                  <div className="bg-space-dark/50 p-4 rounded-lg ml-6">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{type.title}</h3>
                    <p className="text-gray-300">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <h2 className="section-heading">תהליך היצירה</h2>
            
            <div className="max-w-4xl mx-auto mt-12">
              <div className="glass-card p-8">
                <div className="relative">
                  <div className="hidden md:block absolute top-0 bottom-0 right-4 w-0.5 bg-gradient-to-b from-space-turquoise via-space-purple to-space-blue h-full"></div>
                  
                  <div className="space-y-16">
                    <div className="relative flex">
                      <div className="hidden md:flex flex-col items-center mr-8">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-space-turquoise to-space-purple text-white flex items-center justify-center font-bold z-10">
                          1
                        </div>
                        <div className="h-full"></div>
                      </div>
                      
                      <div className="md:pr-4 flex-1">
                        <div className="flex items-center mb-4">
                          <div className="md:hidden w-8 h-8 rounded-full bg-gradient-to-r from-space-turquoise to-space-purple text-white flex items-center justify-center font-bold ml-4">
                            1
                          </div>
                          <h4 className="text-xl font-bold text-white">הגדרת מטרות</h4>
                        </div>
                        <p className="text-gray-300 md:pr-8">
                          מה המטרה של דף הנחיתה? האם זה מכירת מוצר, איסוף פרטים, הרשמה לאירוע? בשלב זה נגדיר במדויק את המטרות העסקיות והקהל היעד.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative flex">
                      <div className="hidden md:flex flex-col items-center mr-8">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-space-purple to-space-blue text-white flex items-center justify-center font-bold z-10">
                          2
                        </div>
                        <div className="h-full"></div>
                      </div>
                      
                      <div className="md:pr-4 flex-1">
                        <div className="flex items-center mb-4">
                          <div className="md:hidden w-8 h-8 rounded-full bg-gradient-to-r from-space-purple to-space-blue text-white flex items-center justify-center font-bold ml-4">
                            2
                          </div>
                          <h4 className="text-xl font-bold text-white">תכנון ואפיון</h4>
                        </div>
                        <p className="text-gray-300 md:pr-8">
                          נתכנן את מבנה הדף, המסרים, וה-Call-to-Action. נעצב את זרימת המידע בצורה אופטימלית לשיעורי המרה גבוהים.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative flex">
                      <div className="hidden md:flex flex-col items-center mr-8">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-space-blue to-space-turquoise text-white flex items-center justify-center font-bold z-10">
                          3
                        </div>
                        <div className="h-full"></div>
                      </div>
                      
                      <div className="md:pr-4 flex-1">
                        <div className="flex items-center mb-4">
                          <div className="md:hidden w-8 h-8 rounded-full bg-gradient-to-r from-space-blue to-space-turquoise text-white flex items-center justify-center font-bold ml-4">
                            3
                          </div>
                          <h4 className="text-xl font-bold text-white">עיצוב ופיתוח</h4>
                        </div>
                        <p className="text-gray-300 md:pr-8">
                          נעצב ונפתח את דף הנחיתה בהתאם לתכנון, עם דגש על מהירות, נראות, ובהתאמה מלאה למותג שלך.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative flex">
                      <div className="hidden md:flex flex-col items-center mr-8">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-space-turquoise to-space-purple text-white flex items-center justify-center font-bold z-10">
                          4
                        </div>
                      </div>
                      
                      <div className="md:pr-4 flex-1">
                        <div className="flex items-center mb-4">
                          <div className="md:hidden w-8 h-8 rounded-full bg-gradient-to-r from-space-turquoise to-space-purple text-white flex items-center justify-center font-bold ml-4">
                            4
                          </div>
                          <h4 className="text-xl font-bold text-white">השקה, ניתוח ושיפור</h4>
                        </div>
                        <p className="text-gray-300 md:pr-8">
                          לאחר השקת הדף, נמשיך לעקוב אחר הביצועים ולבצע אופטימיזציות שוטפות כדי לשפר את שיעורי ההמרה.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-space-dark z-0"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="glass-card p-10 md:p-16 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-rubik text-white">
                מוכנים לבנות דף נחיתה שמשיג תוצאות?
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                דף נחיתה אפקטיבי יכול להיות ההבדל בין קמפיין מוצלח לכישלון. בואו ניצור יחד דף שמשיג את המטרות העסקיות שלכם.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-space-turquoise to-space-purple text-white font-medium py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105 shadow-lg"
                >
                  צור קשר עכשיו
                </Link>
                
                <Link
                  to="/portfolio"
                  className="bg-transparent border border-space-turquoise/50 text-white font-medium py-3 px-8 rounded-lg text-lg transition-colors hover:bg-space-turquoise/10"
                >
                  צפה בעבודות קודמות
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <Accessibility />
    </div>
  );
};

export default LandingPages;
