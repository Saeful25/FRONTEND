import React from "react";
import TableComponent from "../component/Table";
import Footer from "../component/Footer";
import NavbarComponent from "../component/Navbar";
import CourseCard from "../component/CourseCard";


const Course = () => {
  return (
    <div>
      <NavbarComponent />
      <h1>Course</h1>
      <CourseCard/>      
      <TableComponent />
      <Footer />
    </div>
  );
};

export default Course;
