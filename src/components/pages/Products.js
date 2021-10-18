import React from "react";
import "../../App.css";
import Cards from "../Cards";
import PropertyCard from "../PropertyCard";
import { Row, Col, Space } from "antd";
import AboutProperty from "../AboutProperty";

// import  './'

export default function Products() {
  return (
    <>
      <AboutProperty />
      <h1>Choose from over 100+ properties </h1>

      <div>
        <Row>
          <Col offset={2}>
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </Col>
        </Row>
      </div>
    </>
  );
}
