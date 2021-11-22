import "./App.css";

import Home from "./views/Home/Home.jsx";
import TouristActivities from "./views/TouristActivities/TouristActivities";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import { listCountries, listActivities } from "./actions";
import Landing from "./views/Landing/Landing";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3001/countries")
      .then((countries) => {
        dispatch(listCountries(countries.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <div className="app">
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/">
        <Navbar />
      </Route>
      <Route exact path="/countries">
        <Home />
      </Route>
      <Route path="/activities">
        <TouristActivities />
      </Route>
      <Route path="/countries/:id">
        <CountryDetails />
      </Route>
    </div>
  );
}

export default App;
