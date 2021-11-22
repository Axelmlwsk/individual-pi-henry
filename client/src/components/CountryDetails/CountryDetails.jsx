import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import css from "./CountryDetails.module.css";
function CountryDetails() {
  const [country, setCountry] = useState({});
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/countries/${id}`)
      .then((data) => setCountry(data.data))
      .catch((err) => {
        setError("Country not Found");
      });
  }, [id]);
  return (
    <div className={css.container}>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div className={css.details}>
          <h1>{country.name}</h1>
          <h3>{country.ID}</h3>
          <img className={css.flag} src={country.img} alt="flag" />
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
