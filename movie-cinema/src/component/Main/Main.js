import Car from "../Car/Car.js";
import User from "../User/User.js";
import "./Main.css";
const Main = () => {
  return (
    <div className="content">
      {/* <User nama="Bambang Pacul" member="Platinum" />
      <User nama="Budi" member="Gold" />
      <User nama="Zainal" member="Diamond" />
      <User nama="Vina" member="Gold" />
      <User nama="Ucup" member="Non Member" />
      <User nama="Malik" member="Silver" />
      <User nama="Azizah" member="Platinum" />
      <User nama="Agus" member="Non Member" />
      <User nama="Maryam" member="Diamond" />
      <User nama="Feri" member="Silver" /> */}

     <Car 
     merk="Ferari" 
     harga={2} 
     isNew={true} 
     colors={['Hitam', 'Putih', 'Merah','hijau','kuning']}
     gambar ="https://e7.pngegg.com/pngimages/834/466/png-clipart-ferrari-ferrari-thumbnail.png"
     beli={() => alert("Sudah DiBeli")}>
     </Car>
     <Car 
     merk="BMW M3" 
     harga={2} 
     isNew={true} 
     colors={['Hitam', 'Putih', 'Abu Abu']}
     gambar ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQph7GdiEgFNH5IJ85fFSHaMPM991r7Alf7vA&usqp=CAU"
     beli={() => alert("Sudah DiBeli")}>
     </Car>
     <Car 
     merk="mercedes benz g63" 
     harga={2} 
     isNew={true} 
     colors={['Hitam', 'Putih', 'Abu Abu']}
     gambar ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2J-q5BpCgYgaDkN7Kx4QZsiBLriO-d4bSA&usqp=CAU"
     beli={() => alert("Sudah DiBeli")}>
     </Car>
     
    </div>
  );
};
export default Main;