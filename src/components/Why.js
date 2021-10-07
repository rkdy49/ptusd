import React from "react";
import { Card, Avatar } from "antd";
import { Col, Row } from "antd";
import "./Why.css";
const { Meta } = Card;

function Why() {
  return (
    <>
      <Row style={{ marginBottom: "4%" }}>
        <Col span={22} offset={2}>
          <h1 className={"WhyHeading"}>Why Real State Tokenization</h1>
          <Row>
            <Col span={10}>
              <Card
                style={{
                  width: 450,
                  borderRadius: true,
                  padding: 0,
                  margin: "5% auto",
                  //   margin: "auto",
                }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
              >
                {/* <Meta
                  description=" We define a bitcoin as a chain of digital signatures. Each
      owner transfers bitcoin to the next by digitally signing a
      hash of the previous transaction and the public key of the
      next owner and adding these to the end of the coin. A payee
      can verify the signatures to verify the chain of ownership."
                /> */}

                <h2>Democratization</h2>
                <p>
                  {" "}
                  We define a bitcoin as a chain of digital signatures. Each
                  owner transfers bitcoin to the next by digitally signing
                </p>
              </Card>
            </Col>

            <Col span={10}>
              <Card
                style={{ width: 450, float: "right", margin: "5% auto" }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
              >
                {/* <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Card title"
                  description=" We define a bitcoin as a chain of digital signatures. Each
      owner transfers bitcoin to the next by digitally signing a
      hash of the previous transaction and the public key of the
      next owner and adding these to the end of the coin. A payee
      can verify the signatures to verify the chain of ownership."
                /> */}
                <h2>Democratization</h2>
                <p>
                  {" "}
                  We define a bitcoin as a chain of digital signatures. Each
                  owner transfers bitcoin to the next by digitally signing
                </p>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col span={10}>
              <Card
                style={{
                  width: 450,
                  borderRadius: true,
                  padding: 0,
                  margin: "5% auto",
                }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    // style={{ height: 200 }}
                  />
                }
              >
                {/* <Meta
                  description=" We define a bitcoin as a chain of digital signatures. Each
      owner transfers bitcoin to the next by digitally signing a
      hash of the previous transaction and the public key of the
      next owner and adding these to the end of the coin. A payee
      can verify the signatures to verify the chain of ownership."
                /> */}

                <h2>Democratization</h2>
                <p>
                  {" "}
                  We define a bitcoin as a chain of digital signatures. Each
                  owner transfers bitcoin to the next by digitally signing
                </p>
              </Card>
            </Col>

            <Col span={10}>
              <Card
                style={{
                  width: 450,
                  margin: "auto",
                  float: "right",
                  margin: "5% auto",
                }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
              >
                {/* <Meta
                 
                  title="Card title"
                  description=" We define a bitcoin as a chain of digital signatures. Each
      owner transfers bitcoin to the next by digitally signing a
      hash of the previous transaction and the public key of the
      next owner and adding these to the end of the coin. A payee
      can verify the signatures to verify the chain of ownership."
                /> */}
                <h2>Democratization</h2>
                <p>
                  {" "}
                  We define a bitcoin as a chain of digital signatures. Each
                  owner transfers bitcoin to the next by digitally signing
                </p>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Why;
