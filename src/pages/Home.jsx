import "../index.css";
import React from 'react';
import HeroSection from '../components/HeroSection';
import WhyChoose from '../components/WhyChoose';
import FeaturesGrid from '../components/FeaturesGrid';
import HowItWorks from '../components/HowItWorks';
import CallToAction from '../components/CallToAction';


      
    const Home = () => {
      return (
        <div>
          <HeroSection />
          
          <WhyChoose />
          <FeaturesGrid />
          {<HowItWorks /> }
          {<CallToAction />}
        </div>
      );
    };
    
    export default Home;
    

