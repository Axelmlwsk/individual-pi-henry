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
      <button onClick={handleClick}>
        <Link to="/countries">ENTRAR</Link>
      </button>
    </div>
  );
}

export default Landing;
