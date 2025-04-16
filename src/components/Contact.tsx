
import React, { useState } from 'react';
import { 
  MessageSquare, 
  Mail, 
  Phone,
  Send,
  ArrowLeft,
  Loader2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "ההודעה נשלחה בהצלחה!",
        description: "נחזור אליך בהקדם האפשרי.",
        variant: "default",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative" aria-label="צור קשר">
      <div className="absolute inset-0 bg-space-dark z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-heading">צור קשר</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">שלח לנו הודעה</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">שם מלא</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-space-dark/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-space-turquoise"
                  placeholder="השם המלא שלך"
                  aria-required="true"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">אימייל</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-space-dark/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-space-turquoise"
                  placeholder="האימייל שלך"
                  aria-required="true"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-300 mb-2">טלפון</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-space-dark/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-space-turquoise"
                  placeholder="מספר הטלפון שלך (לא חובה)"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">הודעה</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-space-dark/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-space-turquoise"
                  placeholder="איך נוכל לעזור לך?"
                  aria-required="true"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-space-turquoise to-space-purple text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                    שולח...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 ml-2" />
                    שלח הודעה
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="glass-card p-8 flex flex-col">
            <h3 className="text-2xl font-bold mb-6 text-white">פרטי התקשרות</h3>
            
            <div className="flex flex-col space-y-8 flex-grow">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-space-turquoise ml-4 mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-1">אימייל</h4>
                  <a href="mailto:contact@brandlify.co.il" className="text-gray-300 hover:text-space-turquoise transition-colors">
                    contact@brandlify.co.il
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-space-purple ml-4 mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-1">טלפון</h4>
                  <a href="tel:+972522174188" className="text-gray-300 hover:text-space-turquoise transition-colors">
                    052-2174188
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MessageSquare className="w-6 h-6 text-space-blue ml-4 mt-1" />
                <div>
                  <h4 className="text-white font-medium mb-1">וואטסאפ</h4>
                  <a 
                    href="https://wa.me/972541234567" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-300 hover:text-space-turquoise transition-colors"
                  >
                    שלח הודעת וואטסאפ
                    <ArrowLeft className="mr-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-auto pt-10">
              <div className="text-center">
                <p className="text-gray-400 text-sm">או מצא אותנו ב-</p>
                <div className="flex justify-center space-x-4 space-x-reverse mt-4">
                  <a 
                    href="#" 
                    aria-label="לינקדאין"
                    className="w-10 h-10 rounded-full bg-space-dark/50 flex items-center justify-center text-white hover:bg-space-turquoise/20 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    aria-label="פייסבוק"
                    className="w-10 h-10 rounded-full bg-space-dark/50 flex items-center justify-center text-white hover:bg-space-turquoise/20 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54v-2.203c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.988c4.781-.75 8.437-4.887 8.437-9.878z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    aria-label="אינסטגרם"
                    className="w-10 h-10 rounded-full bg-space-dark/50 flex items-center justify-center text-white hover:bg-space-turquoise/20 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
