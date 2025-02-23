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
  const filtered = [...data]
    .filter((i) => {
      if (activeFilters[FILTERS.severity].length > 0) {
        return activeFilters[FILTERS.severity].includes(i[FILTERS.severity]);
      }
      return true;
    })
    .filter((i) => {
      if (activeFilters[FILTERS.status].length > 0) {
        return activeFilters[FILTERS.status].includes(i[FILTERS.status]);
      }
      return true;
    });

  if (activeFilters[FILTERS.search]?.length) {
    return filterByText({
      data: filtered,
      query: activeFilters[FILTERS.search],
    });
  }
  return filtered;
};

export const filterByText = ({ data, query }) => {
  const cleanQuery = query.trim().toLowerCase();
  const allQueryWords = cleanQuery.split(" ");

  const broadMatch = [...data].filter((d) => {
    const title = d.title.toLowerCase();
    const id = d.id;
    return (
      allQueryWords.some((w) => title.indexOf(w) >= 0) ||
      allQueryWords.some((w) => id.indexOf(w) >= 0)
    );
  });

  const bestMatch = [...data].filter((a) => {
    return a.title.toLowerCase().includes(cleanQuery);
  });
  if (bestMatch.length > 0) return bestMatch;

  return broadMatch;
};
