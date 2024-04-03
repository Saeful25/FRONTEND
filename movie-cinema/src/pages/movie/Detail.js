import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie } from "./../../api"; 

const Detail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const movieData = await getDetailMovie(id);
                setMovie(movieData);
            } catch (error) {
            }
        };

        fetchMovie();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    const { title, overview, poster_path } = movie;

    return (
        <div className="container">
            <section className="hero">
              <div className="hero-left">
                <h2 className="hero-title"> {title}</h2>
                <p className="hero-description">
                Overview: {overview}
                </p>
                <p className="hero-button">Watch</p>
              </div>
              <div class="hero-right">
                <img className="hero-image" src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
              </div>
            </section>
        </div>
    );
};

export default Detail;