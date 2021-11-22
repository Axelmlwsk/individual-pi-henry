export const LIST_COUNTRIES = "LIST_COUNTRIES";
export const FILTERS = "FILTERS";

export const listCountries = (payload) => {
  return { type: LIST_COUNTRIES, payload };
};

export const filters = (payload) => {
  return { type: FILTERS, payload };
};
