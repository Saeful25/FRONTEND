// import './App.css';
import {Component} from "react";
import Header from "./component/Navbar/Navbar.js"
import Car from "./component/Car/Car.js";
import User from "./component/User/User.js";
import Footer from "./component/Footer/Footer.js";
import imgProfile from "./component/gambar.jpg";
import Main from "./component/Main/Main.js";
import Movies from "./component/Movies/Movies.js";
import AddMovieForm from "./component/AddMovieForm/AddMovieForm.js";
import Counter from "./component/Counter/Counter.js";
function App() {
  return (
    // props atau kepanjangan dari propertis
    <div className="container" >
      <Header></Header>

     
     {/* <Usernavbar
     nama="Udin"
     alamat="Bandung"
     angkatan={11}
     hobis={["Membaca" , "Olahraga"]}
     isStatus={true}
     gambar ={imgProfile}
     profile={() => alert ("profile ${nama} telah dibuka")}
     >
     </Usernavbar> */}
     {/* <Movies/> */}
    <Main></Main>
    <Counter/>
     <Footer nama="Saefulloh"></Footer>
    </div>
  );
}


export default App;
