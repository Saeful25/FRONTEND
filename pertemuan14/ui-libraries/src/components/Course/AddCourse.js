import React, {  useState} from "react";
import axios from "axios";
import Layout from '../Layout';
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
const  [name, setName] = useState("");
const [trainer_id, setTrainerId] = useState(1);
const [desc,setDesc] = useState("");
const [ file, setFile] = useState("");
const [preview, setPreview] = useState("");
const navigate = useNavigate("");

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  }
  const saveCourse = async (e) => {
    // preventDefault supaya tidak merefresh halaman
    e.preventDefault();
     try {
       await axios.post(
        "https://api.sukmax.my.id/course",
        
    {
         name: name,
         trainer_id: trainer_id,
         desc: desc,
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
  // redirect ke /table-course
  navigate("/table-course");
    }catch(error) {
      console.log(error);
    }
    // try {
    //   const formData = new FormData();
    //   formData.append("name", name);
    //   formData.append("trainer_id", trainer_id);
    //   formData.append("desc", desc);
    //   formData.append("file", file);
    //   await axios.post("https://api.sukmax.my.id/course", formData);
    // }catch(error) {
    //   console.log(error);
    // }
  };
  return (
<Layout>
  <h2 className='title'>Courses</h2>
  <h3 class="subtitle">Add Course</h3>
  <form onSubmit={saveCourse}>
  <div>
      <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Masukan Nama Course" onChange={(e) => setName(e.target.value)} />
  </div>
</div>

<div class="field">
  <label class="label">trainer_id</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Trainer Id" onChange={(e) => setTrainerId(e.target.value)}/>
  </div>
</div>

<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea" onChange={(e) => setDesc(e.target.value)}></textarea>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox"/>
      I agree to the <a href="#">terms and conditions</a>
    </label>
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
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
    </div>


  </form>
</Layout>

    )
}

export default AddCourse

// import React, { useState } from "react";
// import Layout from "../Layout";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AddCourse = () => {
//   const [name, setName] = useState("");
//   const [trainerId, settrainerId] = useState(1);
//   const [desc, setDesc] = useState("");
//   const [file, setFile] = useState("");
//   const [preview, setPreview] = useState("");
//   const navigate = useNavigate();

//   const loadImage = (e) => {
//     const image = e.target.files[0];
//     setFile(image);
//     setPreview(URL.createObjectURL(image));
//   };

//   const saveCourse = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         "https://api.sukmax.my.id/course",
//         {
//           name: name,
//           trainer_id: trainerId,
//           desc: desc,
//           file: file,
//         },
//         //   agar bisa upload file
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       //   redirect ke /table-course
//       navigate("/table-course");
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <Layout>
//       <h2 className="title">Courses</h2>
//       <h3 className="subtitle">Add New Course</h3>
//       <form onSubmit={saveCourse}>
//         <div class="field">
//           <label class="label">Name</label>
//           <div class="control">
//             <input
//               class="input"
//               type="text"
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Masukkan nama course"
//             />
//           </div>
//         </div>

//         <div class="field">
//           <label class="label">Trainer Id</label>
//           <div class="control">
//             <input
//               class="input"
//               type="text"
//               onChange={(e) => settrainerId(e.target.value)}
//               placeholder="Text input"
//             />
//           </div>
//         </div>

//         <div class="field">
//           <label class="label">Description</label>
//           <div class="control">
//             <textarea
//               name=""
//               className="textarea"
//               id=""
//               cols="30"
//               rows="10"
//               onChange={(e) => setDesc(e.target.value)}
//               placeholder="e.g. Hello World"
//             ></textarea>
//           </div>
//         </div>

//         <div class="file">
//           <label class="file-label">
//             <input
//               class="file-input"
//               type="file"
//               name="resume"
//               onChange={loadImage}
//             />
//             <span class="file-cta">
//               <span class="file-icon">
//                 <i class="fas fa-upload"></i>
//               </span>
//               <span class="file-label"> Choose a file… </span>
//             </span>
//           </label>
//         </div>

//         {preview ? (
//           <figure className="image is-128x128">
//             <img src={preview} alt="preview-img" />
//           </figure>
//         ) : (
//           ""
//         )}

//         <div class="field is-grouped mt-5">
//           <div class="control">
//             <button type="submit" class="button is-link">
//               Submit
//             </button>
//           </div>
//           <div class="control">
//             <button class="button is-link is-light">Cancel</button>
//           </div>
//         </div>
//       </form>
//     </Layout>
//   );
// };

// export default AddCourse;