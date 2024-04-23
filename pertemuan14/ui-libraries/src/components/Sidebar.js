import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside class="menu">
       
        <ul class="menu-list">
        <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/table-course"}>Course</NavLink>
          </li>
          <li>
            <NavLink to={"/table-trainer"}>Trainer</NavLink>
          </li>
        </ul>
       
      </aside>
    </div>
  );
};

export default Sidebar;
