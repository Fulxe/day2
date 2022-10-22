import "./Second.css";
import star from "./star_purple500_24px.jpg";
import avatar from "./Avatar.jpg";
import cover from "./Image.jpg";
import React from "react";


function Second() {
  return (
    <div className="second">
      <img src={cover} />
      <div className="heading">
        <p>Data-Driven Design is Killing Our Instincticts</p>
      </div>
      <div className="paragraph">
        <p>
          Our latest updates and blogs about managing your team Our latest
          updates and blogs about managing your team
        </p>
      </div>
      <div className="info">
        <img src={avatar} />
        <p>Jane Cooper</p>
        <div></div>
        <p>2nd January,2022</p>
      </div>
    </div>
  );
}

export default Second;