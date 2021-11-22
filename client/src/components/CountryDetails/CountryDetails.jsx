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
  console.log(country);
  return (
    <div className={css.container}>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div className={css.details}>
          <h1>{country.name}</h1>
          <h3>{country.ID}</h3>
          <img className={css.flag} src={country.img} alt="flag" />
          <h3>Capital: {country.capital}</h3>
          <h3>Region: {country.continent}</h3>
          <h3>Subregion: {country.subregion}</h3>
          <h3>Poblation: {country.population}</h3>
          <h3>Area: {country.area} km2</h3>
          <p>Tourist Activities</p>
          <ul className={css.activitiesContainer}>
            {!country.TouristActivities
              ? null
              : country.TouristActivities.map((activity) => (
                  <li className={css.activity} key={activity.id}>
                    <h4>ID: {activity.id}</h4>
                    <h4>Name: {activity.name}</h4>
                    <h4>Duration: {activity.duration}</h4>
                    <h4>Difficulty: {activity.difficulty}</h4>
                    <h4>Season: {activity.season}</h4>
                  </li>
                ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
