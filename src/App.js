import './App.css';
import ContactSection from './Section/ContactSection';
import Hero from "./Section/Hero"
import SectionFour from './Section/SectionFour';
import SectionTwo from './Section/WhyZummit';
import Brands from './Section/Brands';
import Carousel from "./Section/Carousel"




function App() {

  return (
    <>
    
      <Hero /> 
      <Brands />
      
      {/* Section One to be done by ThankGod */}

      {/* Section Two by Joshua*/}
      <SectionTwo /> 

      <Carousel/>
      {/* Section Three to be done by Zainab */}

      {/* Section Four by Joshua*/}
      <SectionFour />

      {/* Contact Section by Joshua*/}
      <ContactSection />

    </>
  );
}

export default App;

