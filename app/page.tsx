"use client";

import React from "react";

import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import Services from "./components/Services";
import Sectors from "./components/Sectors";
import DevOpsSolutions from "./components/DevOpsSolutions";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonial from "./components/Testimonial";
import Faq from "./components/FAQ";
import { Faqs } from "./components/data/faqs";
import { CallToAction } from "./components/CallToAction";
// import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="flex-col justify-center bg-[#0a0a0a]">
      <Hero />
      <WhoWeAre />
      <Services />
      <Sectors />
      <DevOpsSolutions />
      <WhyChooseUs />
      <Testimonial />
      <Faq items={Faqs} />
      {/* <CallToAction /> */}
      {/* <Footer /> */}
    </div>
  );
}
