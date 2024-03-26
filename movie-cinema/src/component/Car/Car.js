// import gambar from "./../gambar.jpg"

import "./Car.css"
const Car = (props) => {
    const {merk, harga , isNew, colors, beli,gambar} = props ;
    return (
      // tag kosong ini khusus di react namanya fregment
        <div className="card">
          <img src={gambar} alt="" width={200}/>
          <div className="conten">
            <div className="merk">{merk}</div>
            <div className="harga"> Rp{harga} Miliyar</div>
            <p ><b className="kondisi">{isNew ? "Baru" : "Bekas"} </b>
            <small>Varian Warna : {colors.map((color) => color + " ,")}</small> </p>
            <button onClick={beli}>Beli</button>
          </div>
        </div>
      
    )
  }

  export default Car;