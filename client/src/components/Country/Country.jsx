import React from "react";
import { Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import css from "./Country.module.css";
import { capitalizeFirstLetter } from "../../utils/index";
function Country({ name, flag, continent, ID }) {
  return (
    <div className={css.countryContainer}>
      <div className={css.imgContainer}>
        <img className={css.flag} src={flag} alt="flag" />
      </div>
      <h2>{capitalizeFirstLetter(name)}</h2>
      <h4>{continent}</h4>
      <Link className={css.link} to={`countries/${ID}`}>
        <CgDetailsMore />
      </Link>
    </div>
  );
}

export default Country;
