import React from "react";
import Countries from "../../components/Countries/Countries";
import CountryFilters from "../../components/CountryFilters/CountryFilters";
import css from "./Home.module.css";

function Home() {
  return (
    <div className={css.home}>
      <div className={css.interface}>
        <div className={css.countryFilters}>
          <CountryFilters />
        </div>
      </div>
      <div className={css.countriesContainer}>
        <Countries />
      </div>
    </div>
  );
}

export default Home;
