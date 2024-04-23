import React from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import DetailCourse from "../components/DetailCourse";

const DetailCoursesPage = () => {
  return (
    <div>
      <NavbarComponent />
        <DetailCourse/>
      <Footer />
    </div>
  );
};

export default DetailCoursesPage;
