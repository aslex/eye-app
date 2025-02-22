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
  return [...data].filter((i) => {
    return (
      activeFilters[FILTERS.status].includes(i[FILTERS.status]) &&
      activeFilters[FILTERS.severity].includes(i[FILTERS.severity])
    );
  });
};
