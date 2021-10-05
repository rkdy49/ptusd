import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
// import flow from "../../";

function Cards() {
  return (
    <div className="cards">
      <div>
        <h1>Check out these EPIC Destinations!</h1>

        {/* <img
          src={flow}
          style={{
            width: "50%",
            height: "25%",
            position: "left",
            float: "left",
          }}
          alt="bit"
        /> */}
      </div>

      <div>
        <h3 className="imageSideText">workflow </h3>

        <p>
          A blockchain collects information together in groups, also known as
          blocks, that hold sets of information. Blocks have certain storage
          capacities and, when filled, are chained onto the previously filled
          block, forming a chain of data known as the “blockchain.”
        </p>
      </div>
      {/* <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="../../"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default Cards;
