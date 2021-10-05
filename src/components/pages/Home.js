import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import AboutCompany from "../AboutCompany";
import NewCards from "../NewCards";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutCompany />
      {/* <Cards /> */}
      <NewCards />
      <Footer />
    </>
  );
}

export default Home;
