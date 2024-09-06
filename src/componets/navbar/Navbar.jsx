import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div
      className={`${styles.main} rounded-full grid grid-cols-3  border-black border-2`}
    >
      <div className="flex m-3 ">
        <Link to="/upload">
          {" "}
          <img
            src="/logo.png"
            alt="Logo"
            className={`${styles.logo} border-black border-2`}
          />
        </Link>
      </div>
      <div className={`${styles.heading} h-fit w-fit m-auto font-siteName`}>
        <a href="#top">Cancer Patient's Compass</a>
      </div>
      <div className={`${styles.links} m-3`} style={{ fontSize: "20px" }}>
        <div className="flex items-center float-right gap-8 m-5 mx-16 w-fit">
          <Link to="/">
            <a href="#top"> Home</a>
          </Link>
          <div>
            <Link to="/login">
              <a href="#top"> Login</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
