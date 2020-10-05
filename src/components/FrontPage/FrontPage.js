import React from "react";
import Nav from "../Nav/Nav";
import "./FrontPage.css";

function FrontPage() {
  return (
    <div className="front-page">
      <Nav />
      <div className="landing" id='home'>
        <div className="row center-align">
          <div className="col s12 m5 fx-center r-page">
            <h2 className="land-text">Hi, i'm Lorem</h2>
          </div>
          <div className="col s12 m7 l-page"></div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
