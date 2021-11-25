import React from "react";

import css from "./Landing.module.css";

import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className={css.container}>
      <button className={css.button}>
        <Link className={css.link} to="/countries">
          Enter
        </Link>
      </button>
    </div>
  );
}

export default Landing;
