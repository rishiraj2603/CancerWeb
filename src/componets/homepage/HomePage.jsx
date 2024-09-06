import React from "react";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div
        style={{ fontSize: "20px" }}
        className="flex items-center gap-8 m-5 mx-16 border-black border-2 h-20 "
      >
        <Link to="/understandingCancer" className="mx-2">
          {" "}
          Understanding Cancer{" "}
        </Link>
        <div>
          <select>
            <option>
              <a href="">Treatment-Options</a>
            </option>{" "}
            <option>
              <Link to="/RadiationTherapy">Radiation Therapy</Link>
            </option>
            <option>
              <Link to="/Chemotherapy">Chemotherapy</Link>
            </option>
            <option>
              <Link to="/Surgery">Surgery</Link>
            </option>
            <option>
              <Link to="/AdvancedTreatments">Advanced Treatments</Link>
            </option>
          </select>

          {/* <span to="/exercise">Treatment Options</span>
          <div className={`${styles.dropDownMenu} hidden`}>
            <span>hello</span>
            <span>hello</span>
            <span>hello</span>
          </div> */}
        </div>
        <Link to="/MOG">Decision-Making</Link>
        <Link to="/precaution"> Patient’s Corner </Link>
      </div>
    </div>
  );
};

export default HomePage;
