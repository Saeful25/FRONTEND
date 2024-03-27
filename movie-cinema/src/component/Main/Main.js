import Car from "../Car/Car.js";
import Hero from "../Hero/Hero.js";
import Movies from "../Movies/Movies.js";
import User from "../User/User.js";
import "./Main.css";
const Main = () => {
  const datas = [
    {  
        nama:"Bambang Pacul",
        member:"Platinum", 
        message:"mau naik level ?"
    },
    {  
        nama:"Budi",
        member:"Gold", 
        message:"Level up"
    },
    {  
        nama:"Zainal",
        member:"Non Member", 
        message:"mau beli?"
    },
    {  
        nama:"Vina",
        member:"Silver", 
        message:"level rendah silahkan upgrade level !"
    },
    {  
        nama:"Zahra",
        member:"Platinum", 
        message:"mau naik level?"
    },
    {  
        nama:"Zuned",
        member:"Silver", 
        message:"level rendah silahkan upgrade level !"
    },
    {  
        nama:"Sofyan",
        member:"Diamond", 
        message:"level max"
    },
    
]
  return (
    <div className="content">
      
{/* 
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
     <Car 
     merk="mercedes benz g63" 
     harga={2} 
     isNew={true} 
     colors={['Hitam', 'Putih', 'Abu Abu']}
     gambar ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2J-q5BpCgYgaDkN7Kx4QZsiBLriO-d4bSA&usqp=CAU"
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
     <Car 
     merk="mercedes benz g63" 
     harga={2} 
     isNew={true} 
     colors={['Hitam', 'Putih', 'Abu Abu']}
     gambar ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2J-q5BpCgYgaDkN7Kx4QZsiBLriO-d4bSA&usqp=CAU"
     beli={() => alert("Sudah DiBeli")}>
     </Car> */}
     <Hero/>
     <Movies/>
     
     {
       datas.map((data)=> {
        return (
        <User nama={data.nama} member={data.member} message={() => alert(data.message)}/>
               )
            })
      }
    </div>
  );
};
export default Main;