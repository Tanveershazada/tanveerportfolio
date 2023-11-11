import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";

function App() {
  return (
    <div className="w-full h-auto px-4 bg-bodyColor text-lightText">
      <Navbar/>
      <div className="max-w-screen-xl mx-auto">
      <Banner/>
      <Features/>
      <Projects/>
      <Resume/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      <FooterBottom/>
      </div>
    </div>
  );
}

export default App;
