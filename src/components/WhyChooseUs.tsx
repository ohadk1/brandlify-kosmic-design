
import React from 'react';
import { 
  Zap, ShieldCheck, Clock, SmilePlus, Monitor, PenTool
} from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-space-turquoise" />,
    title: 'מהירות ויעילות',
    description: 'זמני אספקה מהירים ללא פשרות על איכות העבודה.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-space-purple" />,
    title: 'אבטחה ואמינות',
    description: 'כל הפרויקטים שלנו בנויים עם דגש על אבטחת מידע ואמינות.'
  },
  {
    icon: <Monitor className="w-8 h-8 text-space-blue" />,
    title: 'תאימות לכל המכשירים',
    description: 'העיצובים שלנו מותאמים לכל סוגי המסכים - מנייד ועד מסכי טלוויזיה.'
  },
  {
    icon: <PenTool className="w-8 h-8 text-space-pink" />,
    title: 'עיצוב מותאם אישית',
    description: 'כל פרויקט מקבל את תשומת הלב המלאה שלנו ומותאם לצרכים הספציפיים שלך.'
  },
  {
    icon: <Clock className="w-8 h-8 text-space-turquoise" />,
    title: 'תמיכה ארוכת טווח',
    description: 'אנחנו כאן בשבילך לאורך כל הדרך, גם זמן רב לאחר סיום הפרויקט.'
  },
  {
    icon: <SmilePlus className="w-8 h-8 text-space-purple" />,
    title: 'שביעות רצון מובטחת',
    description: 'העדיפות העליונה שלנו היא שביעות רצון הלקוח, ולכן נעשה הכל כדי שתהיה מרוצה.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 relative" aria-label="למה לבחור בנו">
      <div className="absolute inset-0 bg-gradient-to-br from-space-purple/20 to-space-turquoise/20 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading text-center">למה לבחור בנו</h2>
          <p className="text-gray-300 text-lg">
            BRANDLIFY מספקת שירותי עיצוב ופיתוח ברמה הגבוהה ביותר, תוך שימת דגש על חדשנות, יצירתיות ומקצועיות.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 flex flex-col items-start transition-transform duration-300 hover:translate-y-[-5px]"
            >
              <div className="p-3 rounded-lg bg-space-dark/50 mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
