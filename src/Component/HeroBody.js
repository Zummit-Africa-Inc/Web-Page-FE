import React from "react";
import "../CSS/herobody.css";
import aiStyle from "../Images/Vector 7.png";
import Button from "./ButtonComponent";

function HeroBody() {
  return (
    <div className="hero">
      <div className="hero_image">
        <div className="hero-text">
          <h1 style={{ fontSize: "50px" }}>
            Tell Us The Problem <br /> We'll solve it with
            <span style={{ color: "yellow" }}>&nbsp; A.I</span>
            <span className="hero_span">
              <img src={aiStyle} alt="ai Style" />
            </span>
          </h1>
          <p style={{ paddingBottom: "30px" }}>
            Lets give your business a head start!
          </p>

          <Button spacing={{ marginRight: "2rem" }} variant="contained">
            <span style={{ color: "black" }}>Request a Demo</span>
          </Button>

          <Button variant="outlined">Experiment A.I</Button>
        </div>
      </div>
    </div>
  );
}

export default HeroBody;
