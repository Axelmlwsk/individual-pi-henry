import React, { useEffect } from "react";
import Countries from "../../components/Countries/Countries";
import CountryFilters from "../../components/CountryFilters/CountryFilters";
import css from "./Home.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { listActivities } from "../../actions/index";
function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/activities")
      .then((activities) => {
        dispatch(listActivities(activities.data));
      })
      .catch((err) => {
        console.log(err);
      });
  });

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
