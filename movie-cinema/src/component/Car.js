import gambar from "./gambar.jpg"

const Car = (props) => {
    const {merk, harga , isNew, colors, beli,img} = props ;
    return (
      // tag kosong ini khusus di react namanya fregment
      <>
      <img src={gambar} alt="" width={200}/>
        <h3>Merk Mobil : {merk}</h3>
        <h4>Harga Mobil : Rp{harga} Miliyar</h4>
        <h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"}</h5>
        <h5>Varian Warna : {colors.map((color) => color + " ,")}</h5>
        <button onClick={beli}>Beli</button>
      </>
    )
  }

  export default Car;