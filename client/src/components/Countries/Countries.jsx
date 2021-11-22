import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Country from "../Country/Country";
import css from "./Countries.module.css";
import Pagination from "../Pagination/Pagination";

function Countries() {
  let allCountries = useSelector((state) => state.countries);
  const filt = useSelector((state) => state.filters);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [showedCountries, setShowedCountries] = useState([]);
  const [filters, setFilters] = useState({});

  const { search, continents, alph, popu, activities } = filters;

  useEffect(() => {
    setShowedCountries(allCountries);
  }, [allCountries]);

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
