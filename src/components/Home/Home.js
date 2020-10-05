import React, { Fragment } from "react";
import FrontPage from "../FrontPage/FrontPage";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <Fragment>
      <FrontPage />
      <About />
      <Gallery />
      <Contact />
    </Fragment>
  );
}

export default Home;
