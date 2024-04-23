import React, {  useState} from "react";
import axios from "axios";
import Layout from '../Layout';
import { useNavigate ,NavLink } from "react-router-dom";

const AddTrainer = () => {
const  [name, setName] = useState("");
const [address, setAddress] = useState(1);
const [skill,setSkill] = useState("");
const [file, setFile] = useState("");
const [preview, setPreview] = useState("");
const navigate = useNavigate("");

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  }
  const saveTrainer = async (e) => {
    // preventDefault supaya tidak merefresh halaman
    e.preventDefault();
     try {
       await axios.post(
        "https://api.sukmax.my.id/trainer",
        
    {
         name: name,
         address: address,
         skill: skill,
          file: file,
    //   // yang pertama adalah key 
    //   // yang kedua adalah value diambil dari state
    },
    // agar bisa upload data
    {
      headers:{
        "Content-Type": "multipart/form-data",
      }
    }
  );
  // redirect ke /table-trainer
  navigate("/table-trainer");
    }catch(error) {
      console.log(error);
    }
  };
  return (
<Layout>
  <h2 className='title'>Trainers</h2>
  <h3 class="subtitle">Add Trainer</h3>
  <form onSubmit={saveTrainer}>
  <div>
      <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Masukan Nama Trainer" onChange={(e) => setName(e.target.value)} />
  </div>
</div>

<div class="field">
  <label class="label">Address</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input " type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>
  </div>
</div>

<div class="field">
  <label class="label">Skill</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea" onChange={(e) => setSkill(e.target.value)}></textarea>
  </div>
</div>
<div class="file">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" onChange={loadImage} />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Choose a file… </span>
    </span>
  </label>
</div>

{preview ? (
  <figure class="image is-128x128">
  <img src={preview} alt="Preview Image" />
</figure>
) : (
  ""
)}

<div class="field is-grouped">
  <div class="control">
    <button type="submit" class="button is-link">Submit</button>
  </div>
  <div class="control">
    <NavLink to="/table-trainer" className="button is-link is-light">Cancel</NavLink>
  </div>
</div>
    </div>


  </form>
</Layout>

    )
}

export default AddTrainer;