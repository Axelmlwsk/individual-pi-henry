import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filters } from "../../actions";
import css from "./CountryFilters.module.css";
function CountryFilters() {
  const dispatch = useDispatch();

  const [filtering, setFiltering] = useState({
    search: "",
    continents: "",
    alph: "",
    popu: "",
    activity: "",
  });

  const activities = useSelector((state) => state.activities);

  const handleChangeContinent = (e) => {
    if (e.target.checked) {
      setFiltering((prevstate) => {
        return {
          ...prevstate,
          continents: prevstate.continents.concat(e.target.value),
        };
      });
    } else {
      const continent = e.target.value;
      setFiltering((prevstate) => {
        return {
          ...prevstate,
          continents: prevstate.continents.replace(continent, ""),
        };
      });
    }
  };

  const handleChangeOrder = (e) => {
    setFiltering((prevstate) => {
      return {
        ...prevstate,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleChangeSearch = (e) => {
    setFiltering((prevstate) => {
      return {
        ...prevstate,
        search: e.target.value,
      };
    });
  };

  useEffect(() => {
    dispatch(filters(filtering));
  }, [dispatch, filtering]);

  return (
    <div className={css.container}>
      <div className={css.search}>
        <input value={filtering.search} onChange={handleChangeSearch} type="text" />
        <span>Search country</span>
      </div>

      <div className={css.continentFilter}>
        <span>Continent filter</span>
        <form className={css.form}>
          <div>
            <input value="Americas" onChange={handleChangeContinent} type="checkbox" name="Americas" />
            <label htmlFor="Americas">Americas</label>
          </div>
          <div>
            <input value="Africa" onChange={handleChangeContinent} type="checkbox" name="Africa" />
            <label htmlFor="Africa">Africa</label>
          </div>
          <div>
            <input value="Europe" onChange={handleChangeContinent} type="checkbox" name="Europe" />
            <label htmlFor="Europe">Europe</label>
          </div>
          <div>
            <input value="Asia" onChange={handleChangeContinent} type="checkbox" name="Asia" />
            <label htmlFor="Asia">Asia</label>
          </div>
          <div>
            <input value="Oceania" onChange={handleChangeContinent} type="checkbox" name="Oceania" />
            <label htmlFor="Oceania">Oceania</label>
          </div>
          <div>
            <input value="Antarctic" onChange={handleChangeContinent} type="checkbox" name="Antarctic" />
            <label htmlFor="Antarctic">Antarctic</label>
          </div>
        </form>
      </div>
      <div className={css.alphFilter}>
        <span>Sort alphabetically</span>
        <br />
        <select value={filtering.alph} onChange={handleChangeOrder} name="alph">
          <option value="">none</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>
      <div className={css.populationFilter}>
        <span>Sort by Population</span>
        <select value={filtering.popu} onChange={handleChangeOrder} name="popu">
          <option value="">none</option>
          <option value="h-l">highest to lowest</option>
          <option value="l-h">lowest to highest</option>
        </select>
      </div>
      <div className={css.activityFilter}>
        <span>Sort by tourist activity</span>
        <select value={filtering.activities} onChange={handleChangeOrder} name="activities">
          <option value="">none</option>
          {activities.map((activity, key) => (
            <option key={activity.id} value={activity.name}>
              {activity.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CountryFilters;
