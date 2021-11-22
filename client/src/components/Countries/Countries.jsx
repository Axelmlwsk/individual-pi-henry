import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Country from "../Country/Country";
import css from "./Countries.module.css";
import Pagination from "../Pagination/Pagination";

function Countries() {
  //si el array que tiene los paises filtrados segun el input es mayor a 0, lo retorno porque quiere decir que se esta buscando algo, si no retorno el array con todos los paises.
  let AllCountries = useSelector((state) => state.countries);
  const filters = useSelector((state) => state.filters);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [showedCountries, setShowedCountries] = useState([]);

  const bySearch = (countries) => {
    if (filters.search) {
      return countries.filter((country) => country.name.startsWith(filters.search));
    } else {
      return countries;
    }
  };

  const byContinent = (countries) => {
    if (filters.continents) {
      return countries.filter((country) => filters.continents.includes(country.continent));
    } else {
      return countries;
    }
  };

  const byOrder = (countries) => {
    if (filters.alph) {
      return filters.alph === "a-z" ? countries.sort((a, b) => a.name.localeCompare(b.name)) : countries.sort((a, b) => b.name.localeCompare(a.name));
    } else return countries;
  };

  useEffect(() => {
    let result = AllCountries;
    result = bySearch(result);
    result = byContinent(result);
    result = byOrder(result);
    console.log(result);
    setShowedCountries(result);
  }, [showedCountries, AllCountries, bySearch, byContinent, byOrder]);

  const indexOfLastPost = currentPage * postsPerPage; //10
  const indexOfFirstPost = indexOfLastPost - postsPerPage; //0
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
