import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Country from "../Country/Country";
import css from "./Countries.module.css";
import Pagination from "../Pagination/Pagination";

function Countries() {
  //si el array que tiene los paises filtrados segun el input es mayor a 0, lo retorno porque quiere decir que se esta buscando algo, si no retorno el array con todos los paises.
  let AllCountries = useSelector((state) => state.countries);
  const filters = useSelector((state) => state.filters);
  const { search, continents, alph, popu, activity } = filters;

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [showedCountries, setShowedCountries] = useState([]);

  // const byContinent = (countries) => {
  //   if (filters.continents) {
  //     return countries.filter((country) => filters.continents.includes(country.continent));
  //   } else {
  //     return countries;
  //   }
  // };

  // const byOrder = (countries) => {
  //   if (filters.alph) {
  //     return filters.alph === "a-z" ? countries.sort((a, b) => a.name.localeCompare(b.name)) : countries.sort((a, b) => b.name.localeCompare(a.name));
  //   } else return countries;
  // };

  // const byPopu = (countries) => {
  //   if (filters.popu) {
  //     return filters.popu === "h-l" ? countries.sort((a, b) => a.population - b.population) : countries.sort((a, b) => b.population - a.population);
  //   } else return countries;
  // };

  useEffect(() => {
    if (search) {
      //fixea un bug donde si avanzas en la paginacion y buscas un pais no muestra nada.
      if (currentPage !== 1) {
        setCurrentPage(1);
      }
    }

    const bySearch = (countries) => {
      // if (currentPage !== 1) {
      //   setCurrentPage(1);
      // }

      if (search) {
        return countries.filter((country) => country.name.startsWith(search));
      } else {
        return countries;
      }
    };

    let result = AllCountries;
    result = bySearch(result);
    setShowedCountries(result);
  }, [setShowedCountries, AllCountries, search]);

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
