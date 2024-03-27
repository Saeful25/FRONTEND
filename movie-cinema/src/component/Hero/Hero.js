import React from "react";
import "./Hero.css"
const Hero = () => {
    return (
        <div>
            <div class="container">
                <section class="hero">
                    <div class="hero-left">
                        <h2 class="hero-title">Title</h2>
                        <h3 class="hero-genre">Gendre:</h3>
                        <p class="hero-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, odio amet iusto alias omnis ad dolores perspiciatis delectus, ipsa obcaecati repudiandae aspernatur. Odio, quas necessitatibus?
                        </p>
                        <p className="hero-button">Watch</p>
                    </div>
                    <div class="hero-right">
                        <img src="https://asset-2.tstatic.net/cirebon/foto/bank/images/spider.jpg" alt="hero-img" className="hero-image"/>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Hero;