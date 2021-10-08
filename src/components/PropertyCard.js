import React from "react";
import { Skeleton, Switch, Card, Avatar } from "antd";
import { Row, Col, Button, Space } from "antd";

const { Meta } = Card;
// import homes from "../";
// import "./PropertyCards.css";

function PropertyCard() {
  return (
    <div>
      <Card
        style={{
          width: 1200,
          margin: 16,
          alignItems: "center",

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
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  style={{ width: "100%", margin: "2%", padding: 0 }}
                />
              </Col>
              <Col span={14} style={{ textAlign: "center" }}>
                <h1>Property Name</h1>
                <h2>Yaha located hai bhai mast jagah hai</h2>
                <Row>
                  <Col span={12}>
                    <h2>
                      {" "}
                      Itta total Paisa
                      <br />
                      $50000
                    </h2>
                  </Col>
                  <Col span={12}>
                    <h2>
                      {" "}
                      Itta total Paisa <br />
                      $200
                    </h2>
                  </Col>
                </Row>

                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  style={{ width: "40%", marginTop: "5%" }}
                >
                  {" "}
                  Buy Now Bro
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
export default PropertyCard;
