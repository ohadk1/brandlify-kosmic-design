
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Accessibility from '@/components/Accessibility';

const Index = () => {
  useEffect(() => {
    document.title = 'BRANDLIFY - עיצוב אתרים ולוגואים';
  }, []);

  return (
    <div className="min-h-screen relative bg-space-dark">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <Accessibility />
    </div>
  );
};

export default Index;
