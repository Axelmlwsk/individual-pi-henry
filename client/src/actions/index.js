export const LIST_COUNTRIES = "LIST_COUNTRIES";
export const FILTERS = "FILTERS";
export const LIST_ACTIVITIES = "LIST_ACTIVITES";
export const listCountries = (payload) => {
  return { type: LIST_COUNTRIES, payload };
};

export const listActivities = (payload) => {
  return { type: LIST_ACTIVITIES, payload };
};

export const filters = (payload) => {
  return { type: FILTERS, payload };
};
