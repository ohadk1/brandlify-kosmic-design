
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Accessibility from '@/components/Accessibility';
import { ArrowLeft, Monitor, ShoppingBag, SearchCheck, Smartphone, CloudCog, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDesign = () => {
  useEffect(() => {
    document.title = 'בניית אתרים - BRANDLIFY';
  }, []);

  const services = [
    {
      icon: <Monitor className="w-10 h-10 text-space-turquoise" />,
      title: 'אתרי תדמית',
      description: 'אתרים מרשימים לעסקים ומותגים שמציגים את החוזקות והיתרונות של העסק שלך.'
    },
    {
      icon: <ShoppingBag className="w-10 h-10 text-space-purple" />,
      title: 'חנויות אונליין',
      description: 'חנויות אינטרנטיות עם ממשק ניהול קל וידידותי, המאפשרות לך למכור ולנהל מוצרים בקלות.'
    },
    {
      icon: <SearchCheck className="w-10 h-10 text-space-blue" />,
      title: 'קידום אתרים',
      description: 'אופטימיזציה לגוגל ומנועי חיפוש אחרים, כדי שהלקוחות ימצאו אותך בקלות.'
    },
    {
      icon: <Smartphone className="w-10 h-10 text-space-pink" />,
      title: 'רספונסיביות מלאה',
      description: 'אתרים שעובדים מצוין בכל גודל מסך - מטלפון נייד ועד מחשב שולחני.'
    },
    {
      icon: <CloudCog className="w-10 h-10 text-space-turquoise" />,
      title: 'ביצועים מהירים',
      description: 'פיתוח מותאם לביצועים גבוהים וזמני טעינה מהירים, לחוויית משתמש מעולה.'
    },
    {
      icon: <Shield className="w-10 h-10 text-space-purple" />,
      title: 'אבטחה מתקדמת',
      description: 'יישום שיטות אבטחה מתקדמות להגנה על האתר שלך והמידע של הלקוחות.'
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
                <span className="gradient-text">בניית אתרים</span>
                <span className="text-white block">מקצועית וחדשנית</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                אנו מתמחים בפיתוח אתרים ברמה הגבוהה ביותר, תוך שימת דגש על חווית משתמש, עיצוב מרהיב וביצועים מעולים. מדפי נחיתה ועד חנויות אונליין מורכבות.
              </p>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-space-turquoise to-space-purple text-white font-medium py-3 px-8 rounded-full text-lg transition-transform hover:scale-105 shadow-lg"
              >
                רוצה להתחיל את האתר שלך?
                <ArrowLeft size={20} />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Services */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <h2 className="section-heading">השירותים שלנו</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="glass-card p-8 flex flex-col transition-transform duration-300 hover:translate-y-[-5px]"
                >
                  <div className="mb-5">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process */}
        <section className="py-20 relative bg-space-darkPurple">
          <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent z-0"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="section-heading">תהליך העבודה שלנו</h2>
            
            <div className="max-w-4xl mx-auto mt-12">
              <div className="space-y-12">
                <div className="relative pr-10 md:pr-0">
                  <div className="hidden md:block absolute top-0 bottom-0 right-24 w-0.5 bg-gradient-to-b from-space-turquoise to-space-purple"></div>
                  
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-space-turquoise to-space-purple text-white flex items-center justify-center font-bold z-10">
                        1
                      </div>
                      <div className="hidden md:block w-10"></div>
                    </div>
                    
                    <div className="md:mr-10 flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">אפיון צרכים ומטרות</h3>
                      <p className="text-gray-300">
                        בפגישה הראשונית נבין את הצרכים והמטרות העסקיות שלך, ונגדיר יחד את היעדים של האתר.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative pr-10 md:pr-0">
                  <div className="hidden md:block absolute top-0 bottom-0 right-24 w-0.5 bg-gradient-to-b from-space-purple to-space-blue"></div>
                  
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-space-purple to-space-blue text-white flex items-center justify-center font-bold z-10">
                        2
                      </div>
                      <div className="hidden md:block w-10"></div>
                    </div>
                    
                    <div className="md:mr-10 flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">עיצוב ותכנון</h3>
                      <p className="text-gray-300">
                        נעצב את האתר בהתאם למיתוג שלך, עם דגש על חווית משתמש מעולה וזרימה נכונה של המידע.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative pr-10 md:pr-0">
                  <div className="hidden md:block absolute top-0 bottom-0 right-24 w-0.5 bg-gradient-to-b from-space-blue to-space-turquoise"></div>
                  
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-space-blue to-space-turquoise text-white flex items-center justify-center font-bold z-10">
                        3
                      </div>
                      <div className="hidden md:block w-10"></div>
                    </div>
                    
                    <div className="md:mr-10 flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">פיתוח וקידוד</h3>
                      <p className="text-gray-300">
                        נפתח את האתר עם טכנולוגיות מתקדמות, קוד נקי, וביצועים אופטימליים בכל הפלטפורמות.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative pr-10 md:pr-0">
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-space-turquoise to-space-purple text-white flex items-center justify-center font-bold z-10">
                        4
                      </div>
                      <div className="hidden md:block w-10"></div>
                    </div>
                    
                    <div className="md:mr-10 flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">השקה ותמיכה</h3>
                      <p className="text-gray-300">
                        לאחר הבדיקות האחרונות, נשיק את האתר ונמשיך ללוות אותך בתמיכה וביצוע עדכונים לפי הצורך.
                      </p>
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
                מוכן להתחיל את הפרויקט שלך?
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                בין אם אתה צריך אתר חדש, שדרוג לאתר קיים, או חנות אונליין - אנחנו כאן כדי להפוך את החזון שלך למציאות.
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

export default WebDesign;
