export const LIST_COUNTRIES = "LIST_COUNTRIES";
export const FILTERS = "FILTERS";
export const LIST_ACTIVITIES = "LIST_ACTIVITIES";
export const SET_FILTERED_COUNTRIES = "SET_FILTERED_COUNTRIES";
export const filters = (payload) => {
  return { type: FILTERS, payload };
};

export const setFilteredCountries = (payload) => {
  return { type: SET_FILTERED_COUNTRIES, payload };
};
