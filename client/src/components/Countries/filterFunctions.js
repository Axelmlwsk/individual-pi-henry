export const bySearch = (countries) => {
  if (search) {
    return countries.filter((country) => country.name.startsWith(search));
  } else {
    return countries;
  }
};

export const byContinent = (countries) => {
  if (continents) {
    return countries.filter((country) => continents.includes(country.continent));
  } else {
    return countries;
  }
};

export const byOrder = (countries) => {
  if (alph) {
    const ordered = alph === "a-z" ? countries.sort((a, b) => a.name.localeCompare(b.name)) : countries.sort((a, b) => b.name.localeCompare(a.name));
    return ordered;
  } else return countries;
};

export const byPopu = (countries) => {
  if (popu) {
    const ordered = popu === "h-l" ? countries.sort((a, b) => a.population - b.population) : countries.sort((a, b) => b.population - a.population);
    return ordered;
  } else return countries;
};
