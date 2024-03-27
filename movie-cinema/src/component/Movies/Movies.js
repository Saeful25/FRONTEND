import React from "react";
import Movie from "../Movie/Movie.js";
import "./Movies.css"
const Movies = () => {
    const datas = [
        {
            title:"Spiderman", 
            year:2021 ,
            genre:"Comedy",
            poster:"https://cdn.antaranews.com/cache/1200x800/2021/12/20/spiderman.jpeg",
        },
        {
            title:"King the land", 
            year:2022 ,
            genre:"Romance",
            poster:"https://cdn.antaranews.com/cache/1200x800/2021/12/20/spiderman.jpeg",
        },
        {
            title:"Vinccenzo", 
            year:2020 ,
            genre:"Action",
            poster:"https://cdn.antaranews.com/cache/1200x800/2021/12/20/spiderman.jpeg",
        },
        {
            title:"Spiderman", 
            year:2017 ,
            genre:"Action,Comedy",
            poster:"https://cdn.antaranews.com/cache/1200x800/2021/12/20/spiderman.jpeg",
        },
        
    ]
    return (
        <div>
            <h2>Latest Movies</h2>
            <div class="movies-container">
                {
                    datas.map((data)=> {
                        return (
                <Movie 
                title={data.title}
                year={data.year} 
                genre={data.genre}
                poster={data.poster}/>
                        )
                    })
                }
               
            </div>
        </div>
    );
};

export default Movies;