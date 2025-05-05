import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-900 text-blue-100">
      <Navbar />
      <Hero />
      <Services />
      {/* <Work /> */}
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
