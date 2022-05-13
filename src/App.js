import React, {useEffect} from 'react';
import './App.css';
import ReactGa from 'react-ga';
import { AIinAction, ContactSection, Hero, SectionFour, SectionTwo, LeverageSection, InternshipSection, FooterSection, BrandSection } from './Section/index';

function App() {
  //Google analytics
  useEffect (() => {
    ReactGa.initialize('UA-228095551-1')

    //to report pageview
    ReactGa.pageview('/')
  }, [])
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
