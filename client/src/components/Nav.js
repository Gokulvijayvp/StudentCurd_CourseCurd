import React from "react";
import { Link } from "react-router-dom";
import { UseStudentContext } from "../mycontext/context";

const Nav = () => {
  const { handleSelect, currentTab } = UseStudentContext();

  return (
    <div className="col-12 float-start">
      <div className="container mt-2 col-12">
        <div className="float-start col-12">
          <ul className="nav nav-tabs mb-2">
            <li className="nav-item">
              <Link
                to="/"
                onClick={() => handleSelect("students")}
                style={
                  currentTab === "students"
                    ? { background: "white", color: "#6092ff" ,border :'1px solid #dee2e6' }
                    : { color: "black" }
                }
                className="nav-link fw-bold"
              >
                Students
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/courses"
                onClick={() => handleSelect("courses")}
                style={
                  currentTab === "courses"
                    ? { background: "white", color: "#6092ff",border :'1px solid #dee2e6' }
                    : { color: "black" }
                }
                className="nav-link fw-bold"
              >
                Courses
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
