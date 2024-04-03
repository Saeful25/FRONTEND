import React from "react";
import './Hero.css'

const Hero = () => {
  return (
    <div>
      <div className="container">
        <section className="hero">
          <div className="hero-left">
            <h2 className="hero-title">Title</h2>
            <h3 className="hero-genre">Genre : </h3>
            <p className="hero-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic
              iure porro cumque, assumenda nobis sequi quam modi quae corrupti
              provident optio, culpa consequatur nostrum repellat at, eum
              facere. Voluptas.
            </p>
            <p className="hero-button">Watch</p>
          </div>
          <div class="hero-right">
            <img className="hero-image" src="https://cdn1.katadata.co.id/media/images/thumb/2023/06/07/Sinopsis_Spider_Man_Across_The_Spider_Verse-2023_06_07-19_41_09_205ccfa4b177162bce7026efd2770bbc_960x640_thumb.jpeg" alt="hero-img" width={300}/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;