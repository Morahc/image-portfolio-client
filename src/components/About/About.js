import React from "react";
import "./About.css";

function About() {
  return (
    <div className="section center-align about" id="about">
      <h2>About me</h2>
      <div className="container about-wrapper">
        <div className="img-container">
          <img
            src="https://images.unsplash.com/photo-1517755711596-b2c1caf9c261?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="responsive-img"
          />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            enim, voluptas tenetur inventore iure hic cupiditate sunt voluptatum
            officiis eos quidem dolorum laudantium veritatis? Vitae, eum
            accusantium laborum consequuntur rerum deserunt suscipit cum omnis
            veritatis quo unde, distinctio dolor voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
