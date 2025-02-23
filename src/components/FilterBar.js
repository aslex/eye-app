import { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataContext";
import { Sidebar, FilterButton, SearchBar } from "./FilterBar.styled";
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
  const { data, setFilteredData, activeFilters, setActiveFilters } =
    useContext(DataContext);

  const handleFilter = (attribute, value) => {
    setActiveFilters(updateActiveFilters({ attribute, value, activeFilters }));
  };

  useEffect(() => {
    if (!data) return;
    setFilteredData(filterData({ data, activeFilters }));
  }, [activeFilters, data]);

  return (
    <Sidebar>
      <SearchBar
        type="text"
        placeholder="search by title or id"
        data-testid="text-search"
        onChange={(e) => {
          setActiveFilters({
            ...activeFilters,
            [FILTERS.search]: e.target.value,
          });
        }}
      />
      <p>Filter by status:</p>
      <FilterButton
        data-testid="filter-button"
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

      <p>Filter by severity:</p>
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
