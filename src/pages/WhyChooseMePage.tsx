
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Accessibility from '@/components/Accessibility';
import { Link } from 'react-router-dom';
import { 
  Clock, Shield, Zap, Users, Star, Settings, 
  MessageCircle, Award, ArrowLeft, ArrowRight
} from 'lucide-react';

const WhyChooseMePage = () => {
  useEffect(() => {
    document.title = 'למה לבחור בנו - BRANDLIFY';
  }, []);

  const benefits = [
    {
      icon: <Clock className="w-12 h-12 text-space-turquoise" />,
      title: 'זמני אספקה מהירים',
      description: 'אנו מחויבים לעמידה בלוחות זמנים ומספקים את העבודות בזמן שהובטח, בלי תירוצים ובלי עיכובים מיותרים.'
    },
    {
      icon: <Shield className="w-12 h-12 text-space-purple" />,
      title: 'אבטחה ואמינות',
      description: 'כל הפרויקטים שלנו בנויים עם דגש על אבטחת מידע ואמינות, לשקט נפשי מלא עבורך ועבור הלקוחות שלך.'
    },
    {
      icon: <Zap className="w-12 h-12 text-space-blue" />,
      title: 'ביצועים מעולים',
      description: 'האתרים שאנו בונים טעינים במהירות, עובדים בצורה חלקה ומבטיחים חווית משתמש מצוינת.'
    },
    {
      icon: <Users className="w-12 h-12 text-space-pink" />,
      title: 'ליווי אישי',
      description: 'אנו מאמינים בתקשורת פתוחה וזמינה, ולכן תקבלו ליווי אישי לאורך כל תהליך העבודה.'
    },
    {
      icon: <Star className="w-12 h-12 text-space-turquoise" />,
      title: 'איכות ללא פשרות',
      description: 'אנו לא מתפשרים על איכות העבודה, ומבטיחים תוצאה סופית שתעלה על הציפיות שלך.'
    },
    {
      icon: <Settings className="w-12 h-12 text-space-purple" />,
      title: 'פתרונות מותאמים אישית',
      description: 'כל פרויקט מקבל תשומת לב מלאה ופתרונות מותאמים אישית לצרכים הספציפיים של העסק שלך.'
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
                <span className="gradient-text">למה לבחור</span>
                <span className="text-white block">ב-BRANDLIFY?</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                מה שמבדיל אותנו הוא השילוב המושלם בין יצירתיות, מקצועיות וטכנולוגיה. אנו מחויבים להצלחת הלקוחות שלנו, ועושים כל מאמץ כדי לספק תוצאות שיעלו על הציפיות.
              </p>
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <h2 className="section-heading">היתרונות שלנו</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="glass-card p-8 flex flex-col items-center text-center transition-transform duration-300 hover:translate-y-[-5px]"
                >
                  <div className="mb-5">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Work Process */}
        <section className="py-20 relative bg-space-darkPurple">
          <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent z-0"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="section-heading">איך אנחנו עובדים</h2>
            
            <div className="max-w-4xl mx-auto mt-12">
              <div className="glass-card p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-white text-center">המתודולוגיה שלנו</h3>
                <p className="text-gray-300 text-center mb-8">
                  אנו עובדים בצורה מסודרת, שקופה ויעילה כדי להבטיח תהליך עבודה חלק ותוצאות מעולות. הנה איך זה עובד:
                </p>
                
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
                          <h4 className="text-xl font-bold text-white">פגישת היכרות וייעוץ ראשוני</h4>
                        </div>
                        <p className="text-gray-300 md:pr-8">
                          נפגשים כדי להבין את העסק שלך, את המטרות והיעדים, וביחד נגבש את האסטרטגיה הדיגיטלית המיטבית עבורך.
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
                          <h4 className="text-xl font-bold text-white">אפיון ותכנון מפורט</h4>
                        </div>
                        <p className="text-gray-300 md:pr-8">
                          נגדיר את הדרישות, ניצור מפת דרכים מפורטת, ונתכנן את הארכיטקטורה ואת חווית המשתמש של הפרויקט.
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
                          <h4 className="text-xl font-bold text-white">עיצוב ויצירת תוכן</h4>
                        </div>
                        <p className="text-gray-300 md:pr-8">
                          נעצב ממשקים מרהיבים ויצירתיים, ונפתח תוכן איכותי שמעביר את המסרים של העסק שלך בצורה אפקטיבית.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative flex">
                      <div className="hidden md:flex flex-col items-center mr-8">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-space-turquoise to-space-purple text-white flex items-center justify-center font-bold z-10">
                          4
                        </div>
                        <div className="h-full"></div>
                      </div>
                      
                      <div className="md:pr-4 flex-1">
                        <div className="flex items-center mb-4">
                          <div className="md:hidden w-8 h-8 rounded-full bg-gradient-to-r from-space-turquoise to-space-purple text-white flex items-center justify-center font-bold ml-4">
                            4
                          </div>
                          <h4 className="text-xl font-bold text-white">פיתוח ובנייה</h4>
                        </div>
                        <p className="text-gray-300 md:pr-8">
                          נבנה את הפרויקט בקוד נקי וטכנולוגיות מתקדמות, עם דגש על ביצועים, אבטחה, ורספונסיביות מלאה.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative flex">
                      <div className="hidden md:flex flex-col items-center mr-8">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-space-purple to-space-blue text-white flex items-center justify-center font-bold z-10">
                          5
                        </div>
                      </div>
                      
                      <div className="md:pr-4 flex-1">
                        <div className="flex items-center mb-4">
                          <div className="md:hidden w-8 h-8 rounded-full bg-gradient-to-r from-space-purple to-space-blue text-white flex items-center justify-center font-bold ml-4">
                            5
                          </div>
                          <h4 className="text-xl font-bold text-white">השקה, תמיכה וליווי</h4>
                        </div>
                        <p className="text-gray-300 md:pr-8">
                          לאחר בדיקות מקיפות, נשיק את הפרויקט ונמשיך לתמוך ולעדכן אותו לאורך זמן. אנחנו תמיד זמינים עבורך.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <h2 className="section-heading">מה הלקוחות אומרים</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="glass-card p-8 relative">
                <div className="absolute top-8 right-8">
                  <MessageCircle className="w-6 h-6 text-space-turquoise opacity-50" />
                </div>
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">
                  "עבדנו עם BRANDLIFY על עיצוב לוגו ואתר חדש לעסק שלנו. התוצאה עלתה על כל הציפיות! הצוות היה מקצועי, קשוב ויצירתי מאוד."
                </p>
                <div className="font-bold text-white">יעל לוי</div>
                <div className="text-gray-400 text-sm">בעלים, סטודיו יצירה</div>
              </div>
              
              <div className="glass-card p-8 relative">
                <div className="absolute top-8 right-8">
                  <MessageCircle className="w-6 h-6 text-space-purple opacity-50" />
                </div>
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">
                  "הזמנתי דף נחיתה לקמפיין חדש וקיבלתי תוצאה מדהימה שעזרה לנו להגדיל את ההמרות ב-40%. שירות מעולה, מהיר ומקצועי."
                </p>
                <div className="font-bold text-white">דניאל כהן</div>
                <div className="text-gray-400 text-sm">מנהל שיווק, חברת טכנולוגיה</div>
              </div>
              
              <div className="glass-card p-8 relative">
                <div className="absolute top-8 right-8">
                  <MessageCircle className="w-6 h-6 text-space-blue opacity-50" />
                </div>
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">
                  "עבדנו על מיתוג מחדש של העסק, וקיבלנו לוגו וזהות מותג שבאמת משקפים את הערכים שלנו. צוות BRANDLIFY היה אכפתי, יצירתי ומדויק."
                </p>
                <div className="font-bold text-white">נועה רון</div>
                <div className="text-gray-400 text-sm">מנכ"לית, חברת ייעוץ</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Awards */}
        <section className="py-20 relative bg-space-darkPurple">
          <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent z-0"></div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="section-heading text-center">הישגים והכרה</h2>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="glass-card p-6 flex flex-col items-center w-64">
                <Award className="w-16 h-16 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">מצוינות בעיצוב</h3>
                <p className="text-gray-400 text-sm">2023</p>
              </div>
              
              <div className="glass-card p-6 flex flex-col items-center w-64">
                <Award className="w-16 h-16 text-space-turquoise mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">חווית משתמש מובילה</h3>
                <p className="text-gray-400 text-sm">2022</p>
              </div>
              
              <div className="glass-card p-6 flex flex-col items-center w-64">
                <Award className="w-16 h-16 text-space-purple mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">שותף דיגיטלי מצטיין</h3>
                <p className="text-gray-400 text-sm">2021</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="glass-card p-10 md:p-16 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-rubik text-white">
                בואו נהפוך את החזון שלך למציאות
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                אנו מוכנים לענות על כל שאלה ולסייע לך בכל צעד בדרך ליצירת נוכחות דיגיטלית מרשימה וחזקה.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-space-turquoise to-space-purple text-white font-medium py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105 shadow-lg"
                >
                  <ArrowLeft size={20} />
                  צור קשר עכשיו
                </Link>
                
                <Link
                  to="/portfolio"
                  className="flex items-center justify-center gap-2 bg-transparent border border-space-turquoise/50 text-white font-medium py-3 px-8 rounded-lg text-lg transition-colors hover:bg-space-turquoise/10"
                >
                  <ArrowRight size={20} />
                  ראה את העבודות שלנו
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

export default WhyChooseMePage;
