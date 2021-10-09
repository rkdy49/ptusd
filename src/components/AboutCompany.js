import React from "react";
import { Row, Col, Button, InputNumber, Space, Upload, Modal } from "antd";
import { Typography } from "antd";
import pos from "../../src/TLClogo.jpeg";

import "./AboutCompany.css";
import PropertyCard from "./PropertyCard";

const { Title } = Typography;

function AboutCompany() {
    return ( <
        >
        <
        div className = "main" >
        <
        h1 > WELCOME TO BRICKSTOX < /h1> <
        h2 > A blockchain powered platform where users can buy and sell Fractional Tokenized Ownership of Real Estate. < /h2>

        <
        div className = "bulletBlock" >
        <
        ul >
        <
        li > Invest as high / low as you want < /li> <
        li > Earn high returns < /li> <
        li > Liquidate anytime < /li> < /
        ul > <
        /div> < /
        div > {
            /* <div>
                    <h1>Why Real State Tokenization?</h1>
                    <Row>
                      <Col span={22} offset={2} style={{ margin: "0%  10%" }}>
                        <Row>
                          <Col span={9}>
                            <img
                              src={pos}
                              style={{
                                width: "45%",

                                marginTop: "20%",
                              }}
                              alt="pos"
                            />
                          </Col>

                          <Col span={13}>
                            <Title level={3} style={{ color: " white;" }}>
                              Working
                            </Title>

                            <Title
                              level={5}
                              style={{ color: " white;", padding: "0px 0px 20px 0px" }}
                            >
                              We define a bitcoin as a chain of digital signatures. Each
                              owner transfers bitcoin to the next by digitally signing a
                              hash of the previous transaction and the public key of the
                              next owner and adding these to the end of the coin. A payee
                              can verify the signatures to verify the chain of ownership.
                              <br></br>
                            </Title>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
               */
        } <
        />
    );
}

export default AboutCompany;