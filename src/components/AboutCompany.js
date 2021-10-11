import React from "react";
import { Row, Col, Button, InputNumber, Space, Upload, Modal } from "antd";
import { Typography } from "antd";
import pos from "../../src/TLClogo.jpeg";

import "./AboutCompany.css";
import PropertyCard from "./PropertyCard";
import invest from "../../src/market-investment.png";
import returns from "../../src/returns.png";
import liquidate from "../../src/liquidate.png";

const { Title } = Typography;

function AboutCompany() {
  return (
    <>
      <div className="main">
       
        <h1>
          {" "}
          A blockchain powered platform where users can buy and sell Fractional
          Tokenized Ownership of Real Estate{" "}
        </h1>

        <div className="bulletBlock">

          <ul>

            <li >
              <img className = "small-icons" src = {invest} style = {{marginTop: "-10px"}} />
            Invest as high / low as you want
            </li>{" "}
            
            <li> <img className= "small-icons" src = {returns} style = {{marginTop:"-15px"}} />
            Earn high returns
            </li>

            <li> <img className = "small-icons" src = {liquidate} /> 
            Liquidate anytime 
            </li>{" "}

          </ul>{" "}

        </div>{" "}

      </div>{" "}

    </>
  );
}

export default AboutCompany;
