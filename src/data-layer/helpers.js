import { FILTERS } from "./types";

export const updateActiveFilters = ({ attribute, value, activeFilters }) => {
  const newArr = [...activeFilters[attribute]];
  const index = newArr.indexOf(value);
  if (index !== -1) newArr.splice(index, 1);
  else newArr.push(value);
  return { ...activeFilters, [attribute]: newArr };
};

export const isActive = ({ attribute, value, activeFilters }) =>
  activeFilters[attribute].includes(value);

export const filterData = ({ data, activeFilters }) => {
  const filtered = [...data].filter((i) => {
    return (
      activeFilters[FILTERS.status].includes(i[FILTERS.status]) &&
      activeFilters[FILTERS.severity].includes(i[FILTERS.severity])
    );
  });

  if (activeFilters[FILTERS.search]?.length) {
    const cleanQuery = activeFilters[FILTERS.search].trim().toLowerCase();
    const allQueryWords = cleanQuery.split(" ");

    const broadMatch = [...filtered].filter((d) => {
      const title = d.title.toLowerCase();
      const id = d.id;
      return (
        allQueryWords.some((w) => title.indexOf(w) >= 0) ||
        allQueryWords.some((w) => id.indexOf(w) >= 0)
      );
    });

    const bestMatch = [...filtered].filter((a) => {
      return a.title.toLowerCase().includes(cleanQuery);
    });
    if (bestMatch.length > 0) return bestMatch;

    return broadMatch;
  }
  return filtered;
};
