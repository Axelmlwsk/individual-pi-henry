import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import css from "./ActivitiesForm.module.css";
import axios from "axios";
import { getCountries } from "../../reducer/index";
import { capitalizeFirstLetter } from "../../utils/functions";
function ActivitesForm() {
  const [activityData, setActivityData] = useState({ name: "", difficulty: "1", duration: "60", season: "Summer", selectedCountries: [] });
  const [errors, setErrors] = useState({});
  const [countries, setCountries] = useState([]);

  const allCountries = useSelector((store) => store.countries);

  const dispatch = useDispatch();

  function validate(input) {
    if (input.selectedCountries.length === 0) {
      setErrors((prevstate) => ({ ...prevstate, countries: "Pick one or more countries" }));
    }
    if (!input.name) {
      setErrors((prevstate) => ({ ...prevstate, name: "Name is required" }));
    } else if (!/^.{0,15}$/.test(input.name)) {
      setErrors((prevstate) => ({ ...prevstate, name: "Name is too long" }));
    } else if (!/[a-zA-Z0-9]/.test(input.name)) {
      setErrors((prevstate) => ({ ...prevstate, name: "Invalid Characters" }));
    }
  }

  useEffect(() => {
    setCountries(allCountries); //seteo los paises segun el filtro que se realizo en home.
  }, [allCountries]);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    validate(activityData); //cada vez que se actualiza los inputs del usuario, se valida la data.
  }, [activityData]);

  const handleSearch = (e) => {
    const countries = allCountries;
    const filtrados = countries.filter((country) => country.name.startsWith(e.target.value));
    setCountries(filtrados);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      await axios.post("http://localhost:3001/activity", activityData);
      setActivityData((prevstate) => ({ ...prevstate, selectedCountries: [] }));
    }
    //con esta funcion lo que busco hacer es destildar los checkbox una vez que el formulario es enviado y limpiar el array de paises seleccionados.
  };

  const handleChange = (e) => {
    setErrors({}); //cuando el usuario empieza a tipear o a seleccionar opciones, limpio los errores.
    //pregunto si el input que se ejecuto es tipo checkbox
    if (e.target.type === "checkbox") {
      //guardo si el estado es checked o no;
      const isChecked = e.target.checked;
      if (isChecked) {
        // si es true, lo agrego al estado de selectedCountries pasandole la id.
        return setActivityData((prevstate) => ({ ...prevstate, selectedCountries: prevstate.selectedCountries.concat(e.target.value) }));
      } else {
        //si se hizo uncheck, guardo el ID del pais, y filtro del array de paises a ese pais para eliminarlo.
        const countryID = e.target.value;

        return setActivityData((prevstate) => ({ ...prevstate, selectedCountries: prevstate.selectedCountries.filter((country) => country !== countryID) }));
      }
    }

    setActivityData({ ...activityData, [e.target.name]: e.target.value });
  };

  return (
    <div className={css.container}>
      <form className={css.formActivities} onSubmit={handleSubmit}>
        <div className={css.inputContainer}>
          <div className={css.activityContainer}>
            <p>Write down your tourist activity</p>
            <input className={css.input} value={activityData.name} onChange={handleChange} name="name" placeholder="Enter name" type="text" />
            {errors.name ? <span className={css.red}>{errors.name}</span> : null} {/* RENDERIZADO ERRORES EN NOMBRE */}
          </div>

          <div className={css.difficultyContainer}>
            <p>Set Difficulty</p>
            <input value={activityData.difficulty} onChange={handleChange} name="difficulty" placeholder="difficulty" min="1" max="5" type="range" />
            <span>{activityData.difficulty}</span>
          </div>
          <div className={css.durationContainer}>
            <p>Set the duration in minutes</p>
            <input value={activityData.duration} className={css.input} onChange={handleChange} name="duration" min="1" max="30000" placeholder="duration" type="number" />
          </div>
          <select value={activityData.season} onChange={handleChange} name="season">
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
          </select>

          <button className={css.button} type="submit">
            Add activity
          </button>
        </div>
        {errors.countries ? <p className={css.red}>{errors.countries}</p> : null} {/* RENDERIZADO DE ERRORES EN SELECCION DE PAISES*/}
        <input type="text" onChange={handleSearch} />
        <div className={css.countries}>
          {countries.map((country, key) => {
            return (
              <div key={country.ID} className={css.prueba}>
                <input className={css.countryCheckbox} value={country.ID} onChange={handleChange} id={country.ID} name={country.name} type="checkbox" />
                <label className={css.labelCountry} htmlFor={country.ID}>
                  <img className={css.flag} alt="flag" src={country.img} />
                  <span className={css.name}>{capitalizeFirstLetter(country.name)}</span>
                </label>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}

export default ActivitesForm;
