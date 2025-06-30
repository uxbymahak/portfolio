import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Process from "./components/Process";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Services />
      <Process />
      <Footer />
    </React.Fragment>
  );
}
