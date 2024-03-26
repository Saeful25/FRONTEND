// const User = (props) => {
//     const {nama, alamat ,angkatan,hobis ,isStatus , profile ,gambar} = props;
//     return (
//     <div>
//       <ul>
//         <img src={gambar} alt="" width={200}></img>
//         <li>Nama : {nama}</li>
//         <li>Alamat : {alamat}</li>
//         <li>Angkatan : {angkatan}</li>
//         <li>Hobi : {hobis.map((hobi) => hobi + " ,")}</li>
//         <li>Status : {isStatus ? "Lulus" : "Tidak Lulus"}</li>
//         <button onClick={profile}>profile</button>
//       </ul>
//     </div>
//     );
//   };
import "./User.css"
const User = (props) => {
  const {nama,member,message} = props;
// cara style 1 atua css internal
  return (
  <div>
    <ul>
      <table className="card">
        <thead className="card-head">
        <tr>
          <td colSpan={2} >{nama}</td>
        </tr>
        </thead>
        <tbody className="card-body">
        <tr>
          {/* cara style 2 atau css inline */}
          <td colSpan={2} >{member}</td>
        </tr>
        <tr>
          <td>
        <button onClick={message}>message</button>
          </td>
          <td><button>Subricribe</button></td>
        </tr>
        </tbody>
      </table>
    </ul>
  </div>
  );
};

  export default User;