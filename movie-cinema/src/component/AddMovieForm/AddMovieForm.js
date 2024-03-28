import React, { useState } from "react"
import "./AddMovieForm.css"
const AddMovieForm = ({onAddMovie}) => {
    const [formData, setFormData] = useState({
        title:"",
        year:"",
        genre:"",
        image:"",
        
    });

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMovie(formData);
    }
    return (
        <div className="container">
            <section className="form">
            <div className="form-left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQph7GdiEgFNH5IJ85fFSHaMPM991r7Alf7vA&usqp=CAU" alt=""/>        
            </div>
            <div className="form-right">
                <h1 className="form-title">Add Movie</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-inputgroup">
                        <label htmlfor="title" className="form-label">Title</label>
                        <input type="text" name="title" id="title" className="form-input" onChange={handleChange}/>
                    </div>
                    <div className="form-inputgroup">
                        <label htmlfor="year" className="form-label">year</label>
                        <input type="text" name="year" id="year" className="form-input"onChange={handleChange}/>
                    </div>
                    <div className="form-inputgroup">
                        <label htmlfor="genre" className="form-label" onChange={handleChange}>genre</label>
                        <select name="genre" id="genre" className="form-input">
                            <option value="action">Action</option>
                            <option value="horor">horor</option>
                            <option value="drama">Drama</option>
                            <option value="romance">Romance</option>
                            <option value="comedy">Comedy</option>
                        </select>
                    </div>
                    <div className="form-inputgroup">
                        <label htmlfor="image" className="form-label">image</label>
                        <input type="text" name="image" id="image" className="form-input" onChange={handleChange}/>
                    </div>
                    <button type="submit" className="form-button">Submit</button>
                </form>
            </div>
            </section>
        </div>
    )
}

export default AddMovieForm;