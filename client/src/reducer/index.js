import { LIST_COUNTRIES, FILTERS } from "../actions";

const initialState = {
  countries: [],
  filters: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_COUNTRIES:
      return { ...state, countries: payload };
    case FILTERS:
      return { ...state, filters: payload };
    default:
      return state;
  }
};

export default rootReducer;
