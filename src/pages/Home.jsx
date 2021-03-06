import React from 'react'
import { AIinAction, ContactSection, Hero, SectionFour, SectionTwo, LeverageSection, InternshipSection, FooterSection, BrandSection } from '../Section/index';

const Home = () => {
  return (
    <div>
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
    </div>
  )
}

export default Home