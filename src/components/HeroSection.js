import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
    return ( <
        div className = "hero-container" >


        <
        h1 >
        BRICK < span style = {
            { color: "#4EC8CA" }
        } > STOX < /span> < /
        h1 > <
        p > Real Estate Investments made easy < /p> <
        div className = "hero-btns" >
        <
        Button className = "btns"
        buttonStyle = "btn--outline"
        buttonSize = "btn--large" >
        INVEST NOW <
        /Button> <
        Button className = "btns"
        buttonStyle = "btn--primary"
        buttonSize = "btn--large"
        onClick = { console.log("hey") } >
        HOW IT WORKS!
        <
        i className = "far fa-play-circle" / >
        <
        /Button> < /
        div > <
        /div>
    );
}

export default HeroSection;