import React from "react";
import { Skeleton, Switch, Card, Avatar } from "antd";
const { Meta } = Card;
// import homes from "../";
// import "./PropertyCards.css";

function PropertyCard() {
  return (
    <div>
      <Card
        style={{
          width: 800,
          margin: 16,
          alignItems: "center",
          height: 300,
          padding: "0%",
        }}
      >
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          style={{ width: "50%", margin: "2%" }}
        />
        <h3>Property Name</h3>
      </Card>
    </div>
  );
}
export default PropertyCard;
