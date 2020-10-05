import React from "react";
import { Link } from "react-router-dom";
import Images from "./Images/Images";
import "./Gallery.css";

const images = [
  "https://images.unsplash.com/photo-1587614382417-36be60447b6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1599164251759-9635c53673f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1599110906885-b024c90c2773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1599139958271-df5eec42211b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
];
function Gallery() {
  return (
    <div className="container gallery section center-align" id='gallery'>
      <h2>Gallery</h2>
      <Images imgSrc={images} />
      <Link to="/images">
        <button className="view-btn">View more</button>
      </Link>
    </div>
  );
}

export default Gallery;
