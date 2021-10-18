import React from "react";
import { Skeleton, Switch, Card, Avatar } from "antd";
import { Row, Col, Space } from "antd";
import Button from "../components/Button";
import home from "../../src/home.jpg";
import "./PropertyCards.css";

const { Meta } = Card;
// import homes from "../";
// import "./PropertyCards.css";

function PropertyCard() {
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 1200,
          margin: 16,
          alignItems: "center",
          backgroundColor: "#F8f9f5",
          padding: "0%",
        }}
      >
        {/* <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          style={{ width: "50%", margin: "2%" }}
        />
        <h3>Property Name</h3> */}
        <Row style={{ padding: 0 }}>
          <Col span={24}>
            <Row>
              <Col span={10}>
                <img
                  alt="example"
                  // src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  src={home}
                  style={{ width: "100%", margin: "2%", padding: 0 }}
                />
              </Col>
              <Col span={13} offset={1} style={{ textAlign: "left" }}>
                <h1 style={{ textAlign: "left" }}>Property Name</h1>
                <h2>Location</h2>
                <Row className="propertyCard-Row">
                  <Col span={12}>
                    <h2>
                      {" "}
                      Total Property Value
                      <br />
                      <span style={{ color: "  #294378" }}> $50000</span>
                    </h2>
                  </Col>
                  <Col span={12}>
                    <h2>
                      {" "}
                      Total Token Amount <br />
                      <span style={{ color: "red" }}> $200</span>
                    </h2>
                  </Col>
                </Row>

                <Button > Invest Now </Button>
                {/* <Button /> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
export default PropertyCard;
