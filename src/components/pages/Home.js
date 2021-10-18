import React from "react";
import "../../App.css";
import Cards from "../Cards";
import { Row, Col, Button } from "antd";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import AboutCompany from "../AboutCompany";
import NewCards from "../NewCards";
import PropertyCard from "../PropertyCard";
import Why from "../Why";
import HowItWorks from "../HowItWorks";
function Home() {
  return (
    <>
      <Row>
        <Col span={24}>
          <HeroSection />
          <AboutCompany />
          {/* <Cards /> */}
          <Why />
          <NewCards />
          <HowItWorks />

          <Footer />
        </Col>
      </Row>
    </>
  );
}

export default Home;
