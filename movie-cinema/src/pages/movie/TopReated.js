import React from 'react'
import { getTopMovie } from '../../api';
import Movie from '../../components/Movie/Movie';
import { useState,useEffect } from 'react';
const TopReated = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getTopMovie().then((result) => {
      setDatas(result);
      console.log(result);
    });
  }, []);
  return (
    <div className='movie-container'>
        
    {datas.map((data) => {
       return (
         <Movie
           id={data.id}
           title={data.title}
           release={data.release_date}
           vote_average={data.vote_average}
           vote_count={data.vote_count}
           poster={data.poster_path}
         />
       );
     })}
      
    </div>
  )
}

export default TopReated;