import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries, getActivities } from "../../reducer";
import Country from "../Country/Country";
import css from "./Countries.module.css";
import Pagination from "../Pagination/Pagination";

const _ = require("lodash");

function Countries() {
  const filters = useSelector((state) => state.filters);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [showedCountries, setShowedCountries] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());

    dispatch(getActivities());
  }, [dispatch, filters]);

  const allCountries = useSelector((state) => state.countries);

  const { search, continents, alph, popu, activity } = filters;

  useEffect(() => {
    setShowedCountries(allCountries);
  }, [allCountries]);

  useEffect(() => {
    setCurrentPage(1);
    let filtered = allCountries;

    if (search) {
      filtered = _.filter(filtered, (country) => {
        return country.name.startsWith(search);
      });
    }
    if (alph) {
      filtered = alph === "a-z" ? _.sortBy(filtered, ["name"]) : _.sortBy(filtered, ["name"]).reverse();
    }
    if (continents) {
      filtered = _.filter(filtered, (country) => continents.includes(country.continent));
    }
    if (popu) {
      filtered = popu === "l-h" ? _.sortBy(filtered, ["population"]) : _.sortBy(filtered, ["population"]).reverse();
    }

    if (activity) {
      filtered = filtered.filter((country) => {
        for (let i = 0; i < country.TouristActivities.length; i++) {
          if (country.TouristActivities[i].name === activity) {
            return true;
          }
        }
        return null;
      });
    }
    setShowedCountries(filtered);
  }, [filters, allCountries, search, continents, alph, activity, popu, dispatch]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = showedCountries.slice(indexOfFirstPost, indexOfLastPost).map((country) => {
    return <Country key={country.ID} ID={country.ID} name={country.name} flag={country.img} continent={country.continent} />;
  });

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={css.container}>
      <div className={css.countriesContainer}>{currentPosts}</div>
      <div className={css.pagination}>
        <Pagination postsPerPage={postsPerPage} totalPosts={showedCountries.length} paginate={paginate} />
      </div>
    </div>
  );
}

export default Countries;
