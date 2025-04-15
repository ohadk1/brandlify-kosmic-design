
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Accessibility from '@/components/Accessibility';
import { ArrowLeft, PenTool, Palette, BarChart, Award, Briefcase, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const LogoDesign = () => {
  useEffect(() => {
    document.title = 'עיצוב לוגואים - BRANDLIFY';
  }, []);

  const services = [
    {
      icon: <PenTool className="w-10 h-10 text-space-turquoise" />,
      title: 'עיצוב לוגואים',
      description: 'עיצוב לוגו ייחודי המשקף את הזהות והערכים של העסק שלך.'
    },
    {
      icon: <Palette className="w-10 h-10 text-space-purple" />,
      title: 'מיתוג עסקי',
      description: 'יצירת שפה עיצובית מקיפה לעסק, כולל פלטת צבעים, טיפוגרפיה ואלמנטים גרפיים.'
    },
    {
      icon: <Briefcase className="w-10 h-10 text-space-blue" />,
      title: 'מיתוג משרדי',
      description: 'עיצוב כרטיסי ביקור, ניירת משרדית, חותמות וכל מה שנדרש למיתוג פיזי.'
    },
    {
      icon: <Award className="w-10 h-10 text-space-pink" />,
      title: 'זיהוי מסחרי',
      description: 'פיתוח זהות מסחרית ייחודית שמבדלת את העסק שלך מהמתחרים.'
    },
    {
      icon: <RefreshCw className="w-10 h-10 text-space-turquoise" />,
      title: 'מיתוג מחדש',
      description: 'חידוש והתאמת המיתוג הקיים לצרכים ולמגמות העכשוויות.'
    },
    {
      icon: <BarChart className="w-10 h-10 text-space-purple" />,
      title: 'ניתוח שוק ומתחרים',
      description: 'ניתוח מעמיק של המיתוג בשוק שלך והמיצוב האופטימלי עבור העסק.'
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
                <span className="gradient-text">עיצוב לוגואים</span>
                <span className="text-white block">ומיתוג עסקי</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                לוגו מקצועי הוא הפנים של העסק שלך. אנו מתמחים בעיצוב לוגואים ייחודיים ובניית מיתוג שלם המשקף את הערכים והחזון של העסק שלך.
              </p>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-space-turquoise to-space-purple text-white font-medium py-3 px-8 rounded-full text-lg transition-transform hover:scale-105 shadow-lg"
              >
                רוצה לוגו לעסק שלך?
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
            <h2 className="section-heading">תהליך העיצוב</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12 max-w-5xl mx-auto">
              <div className="space-y-10">
                <div className="glass-card p-6 relative overflow-hidden">
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-r from-space-turquoise to-space-purple text-white flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div className="pr-8">
                    <h3 className="text-xl font-bold mb-3 text-white">מחקר והבנת הצרכים</h3>
                    <p className="text-gray-300">
                      בשלב הראשון, נפגש לשיחת היכרות לעומק על העסק שלך, הערכים, קהל היעד והמסרים שאתה רוצה להעביר דרך הלוגו.
                    </p>
                  </div>
                </div>
                
                <div className="glass-card p-6 relative overflow-hidden">
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-r from-space-purple to-space-blue text-white flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div className="pr-8">
                    <h3 className="text-xl font-bold mb-3 text-white">סקיצות ראשוניות</h3>
                    <p className="text-gray-300">
                      לאחר איסוף כל המידע, ניצור מספר סקיצות ראשוניות המציגות כיוונים שונים ואפשריים ללוגו שלך.
                    </p>
                  </div>
                </div>
                
                <div className="glass-card p-6 relative overflow-hidden">
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-r from-space-blue to-space-turquoise text-white flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div className="pr-8">
                    <h3 className="text-xl font-bold mb-3 text-white">עיבוד והתאמות</h3>
                    <p className="text-gray-300">
                      לאחר שתבחר את הכיוון המועדף, נעבוד על דיוק ושיפור הלוגו בהתאם לפידבק שלך עד לתוצאה המושלמת.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-10 md:mt-10">
                <div className="glass-card p-6 relative overflow-hidden">
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-r from-space-turquoise to-space-purple text-white flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div className="pr-8">
                    <h3 className="text-xl font-bold mb-3 text-white">עיבוד סופי ומיתוג</h3>
                    <p className="text-gray-300">
                      בשלב זה נשלים את עיצוב הלוגו ונתאים אותו למגוון שימושים - דיגיטל, דפוס, גדלים שונים ועוד.
                    </p>
                  </div>
                </div>
                
                <div className="glass-card p-6 relative overflow-hidden">
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-r from-space-purple to-space-blue text-white flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                  <div className="pr-8">
                    <h3 className="text-xl font-bold mb-3 text-white">תיק מיתוג מלא</h3>
                    <p className="text-gray-300">
                      לפי דרישה, נפתח גם תיק מיתוג מלא הכולל הנחיות לשימוש בלוגו, פלטת צבעים, טיפוגרפיה ואלמנטים נוספים.
                    </p>
                  </div>
                </div>
                
                <div className="glass-card p-6 relative overflow-hidden">
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-r from-space-blue to-space-turquoise text-white flex items-center justify-center font-bold text-xl">
                    6
                  </div>
                  <div className="pr-8">
                    <h3 className="text-xl font-bold mb-3 text-white">העברת הקבצים ותמיכה</h3>
                    <p className="text-gray-300">
                      תקבל את כל הקבצים הדרושים בפורמטים שונים, ותמיכה לכל שאלה או עזרה בשימוש בלוגו החדש שלך.
                    </p>
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
                מוכן לקבל לוגו חדש לעסק שלך?
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                לוגו מקצועי הוא השקעה שמשתלמת לטווח ארוך. צור איתנו קשר כדי לתכנן את הלוגו והמיתוג המושלמים עבורך.
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
                  צפה בעבודות לוגו
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

export default LogoDesign;
