// import './App.css';
import {Component} from "react";
import Header from "./component/Header.js"
import Car from "./component/Car.js";
import User from "./component/User.js";
import Footer from "./component/Footer.js";
import imgProfile from "./component/gambar.jpg";
function App() {
  return (
    // props atau kepanjangan dari propertis
    <div className="App" >
      <Header></Header>
     <h1>Hello world</h1>
     <Car 
     merk="Ferari" 
     harga={2} 
     isNew={true} 
     colors={['Hitam', 'Putih', 'Abu Abu']}
     beli={() => alert("Sudah DiBeli")}>
     </Car>
     {/* <User
     nama="Udin"
     alamat="Bandung"
     angkatan={11}
     hobis={["Membaca" , "Olahraga"]}
     isStatus={true}
     gambar ={imgProfile}
     profile={() => alert ("profile ${nama} telah dibuka")}
     >
     </User>
     <User
     nama="Budi"
     alamat="Bekasi"
     angkatan={10}
     hobis={["Menulis" , "Tidur"]}
     isStatus={true}
     gambar="https://cdn-icons-png.flaticon.com/512/6997/6997668.png"
     profile={() => alert ("profile ${nama} telah dibuka")}
     >
     </User>
     <User
     nama="Bambang"
     alamat="Jakarta"
     angkatan={12}
     hobis={["Mancing" , "Tidur"]}
     isStatus={false}
     gambar="https://cdn-icons-png.flaticon.com/512/6833/6833605.png"
     profile={() => alert ("profile ${nama} telah dibuka")}
     >
     </User> */}
     <Footer nama="Saefulloh"></Footer>
    </div>
  );
}







export default App;
