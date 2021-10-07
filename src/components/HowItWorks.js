import React from "react";
import { Row, Col, Button, InputNumber, Space, Upload, Modal } from "antd";
import "./Why.css";

import flow from "../../src/flowchart.jpg";

function HowItWorks() {
  return (
    <div>
      <Row style={{ marginTop: "5%" }}>
        <Col span={22} offset={2}>
          <h1 className={"WhyHeading"}>How it works</h1>
          <img
            src={flow}
            style={{
              width: "800px",
              margin: " 2% 15% 5% 15%",
            }}
            alt="bit"
          />
        </Col>
      </Row>
    </div>
  );
}

export default HowItWorks;
