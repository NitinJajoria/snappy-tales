import Footer from "@/Components/Common/Footer";
import Herosection from "@/Components/ServicesComponent/Herosection";
import Services from "@/Components/ServicesComponent/Services";
import Credibility from "@/Components/Common/Credibility";
import ROISection from "@/Components/Common/ROISection";
import Testimonials from "@/Components/Common/Testimonials";
import ContactForm from "@/Components/Common/ContactForm";
import React from "react";
import ReactLenis from "lenis/react";

const ServicesPage = () => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      <div className="bg-white dark:bg-black">
        <Herosection />
        <Services />
        <Credibility />
        <ROISection />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default ServicesPage;
