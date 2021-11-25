import React from "react";
import css from "./Landing.module.css";
import { Link } from "react-router-dom";
function Landing() {
  const handleClick = (e) => {
    e.preventDefault();
    const landing = e.target.parentElement;
    landing.style.display = "none";
  };

  return (
    <div className={css.container}>
      <button className={css.button} onClick={handleClick}>
        <Link className={css.link} to="/countries">
          Enter
        </Link>
      </button>
    </div>
  );
}

export default Landing;
