import { LIST_COUNTRIES, FILTERS, LIST_ACTIVITIES } from "../actions";
import axios from "axios";

const initialState = {
  countries: [],
  filters: {},
  activities: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_COUNTRIES:
      return { ...state, countries: payload };
    case LIST_ACTIVITIES:
      return { ...state, activities: payload };
    case FILTERS:
      return { ...state, filters: payload };
    default:
      return state;
  }
};

export const getCountries = () => {
  return async (dispatch) => {
    const countries = await axios.get("http://localhost:3001/countries");
    dispatch({
      type: "LIST_COUNTRIES",
      payload: countries.data,
    });
  };
};

export const getActivities = () => {
  return async (dispatch) => {
    const activities = await axios.get("http://localhost:3001/activities");
    const deleteDuplicated = [...new Set(activities.data)];
    dispatch({
      type: "LIST_ACTIVITIES",
      payload: deleteDuplicated,
    });
  };
};

export default rootReducer;
