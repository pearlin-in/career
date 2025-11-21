import React from "react";
import CareersHeroSection from "./components/CareersHeroSection";
import CareerPage from "./components/careers/CareerPage";
import ListWithUsSection from "./components/ListWithUsSection";
import WhyUsSection from "./components/WhyUsSection";
import TSDCareersPage from "./components/TSDCareersPage";
import FaqPage from "./components/faq";


function App() {
  return (
    <>
      <CareersHeroSection/>
      <CareerPage />
      <ListWithUsSection />
      <WhyUsSection/>
      <TSDCareersPage/>
      <FaqPage/>
    </>
  );
}

export default App;
