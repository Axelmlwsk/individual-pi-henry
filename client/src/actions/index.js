export const LIST_COUNTRIES = "LIST_COUNTRIES";
export const FILTERS = "FILTERS";
export const LIST_ACTIVITIES = "LIST_ACTIVITIES";

export const filters = (payload) => {
  return { type: FILTERS, payload };
};
