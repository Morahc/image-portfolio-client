import React from "react";


function Images({ imgSrc }) {
  return (
    <div className='image-grid'>
      {imgSrc.map((img,i) => {
        return (
          <div className="img-wrap" key={i}>
            <img src={img} alt='' className='materialboxed'/>
          </div>
        );
      })}
    </div>
  );
}

export default Images;
