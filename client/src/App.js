import "./App.css";
import Home from "./views/Home/Home.jsx";
import TouristActivities from "./views/TouristActivities/TouristActivities";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import { Provider } from "react-redux";
import { store } from "./store/index";
function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
