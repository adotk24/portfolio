import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
