// import React, { useState } from "react";
// import Movie from "../Movie/Movie.js";
// import "./Movies.css"
// const Movies = () => {
// // const [nama,setNama] = useState("ucup");

// // console.log(nama);

//     const {datas, setDatas} = useState(
//         [
//             {
//                 title:"Spiderman", 
//                 year:2021 ,
//                 genre:"Comedy",
//                 poster:"https://cdn.antaranews.com/cache/1200x800/2021/12/20/spiderman.jpeg",
//             },
//             {
//                 title:"King the land", 
//                 year:2022 ,
//                 genre:"Romance",
//                 poster:"https://cdn.antaranews.com/cache/1200x800/2021/12/20/spiderman.jpeg",
//             },
//             {
//                 title:"Vinccenzo", 
//                 year:2020 ,
//                 genre:"Action",
//                 poster:"https://cdn.antaranews.com/cache/1200x800/2021/12/20/spiderman.jpeg",
//             },
//             {
//                 title:"Spiderman", 
//                 year:2017 ,
//                 genre:"Action,Comedy",
//                 poster:"https://cdn.antaranews.com/cache/1200x800/2021/12/20/spiderman.jpeg",
//             },
            
//         ]
//     );
//     const handleClick = ()=> {
//         const movie = {
//             title: "Amazing spiderman",
//             year:2012,
//             poster:"https://cdn.antaranews.com/cache/1200x800/2021/12/20/spiderman.jpeg",
//             genre: "Action"
//         };
//         setDatas([...datas,movie]);
//     };
// // console.log(datas);
//     return (
//         <div>
//             <h2>Latest Movies</h2>
//             <div class="movies-container">
//                 {
//                     datas.map((data)=> {
//                         return (
//                 <Movie 
//                 title={data.title}
//                 year={data.year} 
//                 genre={data.genre}
//                 poster={data.poster}/>
//                         )
//                     })
//                 }
//             </div>
//             <button onClick={handleClick}>Add movie</button>
//         </div>
//     );
// };

// export default Movies;
/** @format */

import React, { useState } from "react";
import Movie from "../Movie/Movie.js";
import "./Movies.css";
import AddMovieForm from "../AddMovieForm/AddMovieForm.js";
const Movies = () => {
  // state biasanya paling atas
  // pertama file wadah
  // kedua pengubah data awal
  // use state menerima paramemter misal ingin mengubah tipe data string ya si use state ini juga harus string
  // yang ditampilin tetep variable yang awal
  // const [nama, setNama] = useState("uscup");

  // console.log(nama);

  const [datas, setDatas] = useState([
    {
      title: "Judul Film 1",
      year: 2021,
      poster: "https://picsum.photos/200/300",
      genre: "Horror",
    },
    {
      title: "Judul Film 2",
      year: 2020,
      poster: "https://picsum.photos/200/300",
      genre: "Action",
    },
    {
      title: "Judul Film 3",
      year: 2014,
      poster: "https://picsum.photos/200/300",
      genre: "Romance",
    },
    {
      title: "Judul Film 4",
      year: 2023,
      poster: "https://picsum.photos/200/300",
      genre: "Comedy",
    },
    {
      title: "Judul Film 5",
      year: 2022,
      poster: "https://picsum.photos/200/300",
      genre: "Thriller",
    },
    {
      title: "Judul Film 6",
      year: 2014,
      poster: "https://picsum.photos/200/300",
      genre: "Action",
    },
    {
      title: "Judul Film 7",
      year: 2017,
      poster: "https://picsum.photos/200/300",
      genre: "Horror",
    },
    {
      title: "Judul Film 8",
      year: 2018,
      poster: "https://picsum.photos/200/300",
      genre: "Romance",
    },
  ]);
  // dia butuh handler sebagai trigger
  const handleClick = () => {
    const movie = {
      title: "Amazing Spiderman",
      year: "2012",
      poster: "https://picsum.photos/200/300",
      genre: "Action",
    };
    // array baru (movie)
    setDatas([...datas, movie]);
    // setNama("Bumi");
  };
const addMovie = (movie) => {
    setDatas([...datas,movie]);
};

  console.log(datas);
  // mounting = kode semua yang di render pertama kali
  // updateting =
  // unmounting = tahap siklus nya sudah berakhir
  // hook state = fitur yang daapat memungkinkan kita untuk merubah setiap ada perubahan
  // hook punya penulisan seperti ini const ... [value, method]...=>{}
  //fungsi buat bikin tambah kurang
  // const [count, setCount] = useState(0);
  // const handleTambah = () => {
  //   setCount(count + 1);
  // };

  // const handleKurang = () => {
  //   setCount(count - 1);
  // };

  return (
    <div>
      <h1>Latest Movies</h1>
      <div className="movies-container">
        {datas.map((data) => {
          return (
            <Movie
              title={data.title}
              year={data.year}
              poster={data.poster}
              genre={data.genre}
            />
          );
        })}
        {/* yang tadinya ucup pas di klik dia jadi bumi karna si button nya 
        punya hendle yang diaman itu trigger buat hook state */}
        {/* <p>{nama}</p> */}
        {/* <div className="penghitung tambahkurang">
        <h1>Hasil: {count}</h1>
        <button onClick={handleTambah}>+</button>
        <button onClick={handleKurang}>-</button>
    </div> */}
      </div>
    <AddMovieForm onAddMovie={addMovie}/>
    <button onClick={handleClick}>Add Movie</button>
    </div>
  );
};

export default Movies;