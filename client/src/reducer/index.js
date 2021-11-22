import { LIST_COUNTRIES, FILTERS, LIST_ACTIVITIES } from "../actions";

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

export default rootReducer;
