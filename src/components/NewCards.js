import React from "react";
import "antd/dist/antd.css";
import { Card, Col, Row } from "antd";
// import {
//   BookOutlined,
//   PieChartOutlined,
//   CheckCircleOutlined,
// } from "@ant-design/icons";

function NewCards() {
  return (
    <>
      <Row>
        <Col span={21} offset={2}>
          <div className="site-card-wrapper">
            <Row>
              <Col span={7} style={{ margin: "1%" }}>
                <Card
                  bordered={true}
                  style={{ height: "175px", width: "380px" }}
                >
                  <h2>
                    Smart Contact
                    {/* <CheckCircleOutlined /> */}
                  </h2>
                  Our Smart contracts will ensure that timely dividends and
                  rights that are promised are given to the token holders. It
                  will also allow secondary trading of the tokens and sending of
                  metadata with the token.
                </Card>
              </Col>
              <Col span={7} style={{ margin: "1%" }}>
                <Card
                  bordered={true}
                  style={{ height: "175px", width: "380px" }}
                >
                  <h2>
                    {/* Marketplaces <BookOutlined /> */}
                  </h2>
                  Brickstox is a marketplace for primary distribution and
                  secondary trading of estate tokens. will also allow secondary
                  trading of the tokens and sending of metadata with the token.
                </Card>
              </Col>
              <Col span={7} style={{ margin: "1%" }}>
                <Card
                  bordered={true}
                  style={{ height: "175px", width: "380px" }}
                >
                  <h2>
                    {/* Hand-picked Real Estate <PieChartOutlined /> */}
                  </h2>
                  Trustworthy high yielding real estates are listed on
                  Brickstox. will also allow secondary trading of the tokens and
                  sending of metadata with the token.
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default NewCards;
