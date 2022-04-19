import React from 'react';
import './App.css';
import AIinAction from './Section/AIinAction';
import ContactSection from './Section/ContactSection';
import Hero from './Section/Hero';
import SectionFour from './Section/SectionFour';
import SectionTwo from './Section/WhyZummit';
import LeverageSection from './Section/LeverageSection';
import InternshipSection from './Section/InternshipSection';

import FooterSection from './Section/FooterSection';
import BrandSection from './Section/BrandSection';

function App() {
  return (
    <>
      <Hero />
      {/* Section One to be done by ThankGod */}

      {/* BrandSection by Temitope */}
      <BrandSection />

      {/* Section Two by Joshua*/}
      <SectionTwo />

      <LeverageSection />
      {/* Section Three to be done by Thank God */}

      {/* Section Four by Joshua*/}
      <SectionFour />

      {/* Section AI in Action by Joshua*/}
      <AIinAction />
      <InternshipSection />

      {/* Contact Section by Joshua*/}
      <ContactSection />

      {/* Footer Section to be done by Zainab */}
      <FooterSection />
    </>
  );
}

export default App;
