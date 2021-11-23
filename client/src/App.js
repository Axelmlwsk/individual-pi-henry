import "./App.css";
import Home from "./views/Home/Home.jsx";
import TouristActivities from "./views/TouristActivities/TouristActivities";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { getCountries } from "./reducer";
import Landing from "./views/Landing/Landing";

function App() {
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
