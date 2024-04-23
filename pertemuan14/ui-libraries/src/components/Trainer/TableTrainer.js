// import React from "react";
import Table from "react-bootstrap/Table";
import Layout from "../Layout";
import React, { useEffect, useState } from "react";
import {NavLink} from "react-router-dom";
import axios from 'axios';

const TableCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);
  const getCourses = async () => {
    const response = await axios.get("https://api.sukmax.my.id/trainer");
    setCourses(response.data);
  };
  return (
    <Layout>
        <h2 className='title'>Trainers</h2>
        <h3 className="subtitle"> list of triner</h3>
        <div class="control">
          <NavLink to="/trainer/add" type="submit" className="button is-success">Add New</NavLink>
        </div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Address</th>
          <th>skill</th>
          <th>image</th>
        </tr>
      </thead>
      {courses.map((course ) => {
        return (
          <tbody>
          <tr>
            <td>{course.id}</td>
            <td>{course.name}</td>
            <td>{course.address}</td>
            <td>{course.skill}</td>
            <td class="image is-128x128"><img src={course.url} /></td>
          </tr>
          
        </tbody>
        )
      })

      }
     
    </Table>
    </Layout>
    
  );
}

export default TableCourse;
