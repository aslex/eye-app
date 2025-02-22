import { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataContext";
import { Sidebar, FilterButton } from "./FilterBar.styled";
import {
  DEFAULT_FILTERS,
  FILTERS,
  SEVERITY,
  STATUS,
} from "../data-layer/types.js";
import {
  updateActiveFilters,
  isActive,
  filterData,
} from "../data-layer/helpers.js";

export const FilterBar = () => {
  const { data, setFilteredData } = useContext(DataContext);
  const [activeFilters, setActiveFilters] = useState(DEFAULT_FILTERS);

  const handleFilter = (attribute, value) => {
    setActiveFilters(updateActiveFilters({ attribute, value, activeFilters }));
  };

  useEffect(() => {
    if (!data) return;
    setFilteredData(filterData({ data, activeFilters }));
  }, [activeFilters, data]);

  return (
    <Sidebar>
      <p>filter by status:</p>
      <FilterButton
        name={FILTERS.status}
        value={STATUS.triggered}
        props={{
          active: isActive({
            attribute: FILTERS.status,
            value: STATUS.triggered,
            activeFilters,
          }),
        }}
        onClick={(e) => handleFilter(e.target.name, e.target.value)}
      >
        triggered
      </FilterButton>
      <FilterButton
        name={FILTERS.status}
        value={STATUS.acknowledged}
        props={{
          active: isActive({
            attribute: FILTERS.status,
            value: STATUS.acknowledged,
            activeFilters,
          }),
        }}
        onClick={(e) => handleFilter(e.target.name, e.target.value)}
      >
        acknowledged
      </FilterButton>

      <p>filter by severity:</p>
      <FilterButton
        name={FILTERS.severity}
        value={SEVERITY.low}
        props={{
          active: isActive({
            attribute: FILTERS.severity,
            value: SEVERITY.low,
            activeFilters,
          }),
        }}
        onClick={(e) => handleFilter(e.target.name, e.target.value)}
      >
        low
      </FilterButton>
      <FilterButton
        name={FILTERS.severity}
        value={SEVERITY.high}
        props={{
          active: isActive({
            attribute: FILTERS.severity,
            value: SEVERITY.high,
            activeFilters,
          }),
        }}
        onClick={(e) => handleFilter(e.target.name, e.target.value)}
      >
        high
      </FilterButton>
    </Sidebar>
  );
};
