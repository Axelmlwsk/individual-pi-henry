import React from "react";
import css from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
function Navbar() {
  return (
    <nav className={css.navbar}>
      <div className={css.left}>
        <Link className={css.link} to="/countries">
          Home
        </Link>
        <Link className={css.link} to="/activities">
          Activities
        </Link>
      </div>
      <div className={css.right}>
        <img className={css.logo} src={logo} alt="logo" />
      </div>
    </nav>
  );
}

export default Navbar;
