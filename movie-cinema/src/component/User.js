const User = (props) => {
    const {nama, alamat ,angkatan,hobis ,isStatus , profile ,gambar} = props;
    return (
    <div>
      <ul>
        <img src={gambar} alt="" width={200}></img>
        <li>Nama : {nama}</li>
        <li>Alamat : {alamat}</li>
        <li>Angkatan : {angkatan}</li>
        <li>Hobi : {hobis.map((hobi) => hobi + " ,")}</li>
        <li>Status : {isStatus ? "Lulus" : "Tidak Lulus"}</li>
        <button onClick={profile}>profile</button>
      </ul>
    </div>
    );
  };

  export default User;