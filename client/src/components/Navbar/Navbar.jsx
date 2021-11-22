import React from "react";
import css from "./Navbar.module.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className={css.navbar}>
      <div className={css.left}>
        <Link className={css.link} to="/activities">
          Activities
        </Link>
        <Link className={css.link} to="/countries">
          Home
        </Link>
      </div>
      <div className={css.right}>
        <span className={css.logo}>LOGO</span>
      </div>
    </nav>
  );
}

export default Navbar;
