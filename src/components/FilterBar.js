import { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataContext";
import { Sidebar, FilterButton } from "./FilterBar.styled";
import { DEFAULT_FILTERS, FILTERS, STATUS } from "../data-layer/types.js";

export const FilterBar = () => {
  const { data, setFilteredData } = useContext(DataContext);
  const [activeFilters, setActiveFilters] = useState(DEFAULT_FILTERS);

  const handleFilter = (attribute, value) => {
    const newArr = [...activeFilters[attribute]];
    const index = newArr.indexOf(value);
    if (index !== -1) newArr.splice(index, 1);
    else newArr.push(value);
    setActiveFilters({ ...activeFilters, [attribute]: newArr });
  };

  const isActive = (attr, val) => {
    return activeFilters[attr].includes(val);
  };
  useEffect(() => {
    if (!data) return;
    const filtered = [...data].filter((i) => {
      return (
        activeFilters[FILTERS.status].includes(i[FILTERS.status]) &&
        activeFilters[FILTERS.severity].includes(i[FILTERS.severity])
      );
    });
    setFilteredData(filtered);
  }, [activeFilters, data]);

  return (
    <Sidebar>
      <p>filter by status:</p>
      <FilterButton
        name={FILTERS.status}
        value={STATUS.triggered}
        props={{ active: isActive(FILTERS.status, STATUS.triggered) }}
        onClick={(e) => handleFilter(e.target.name, e.target.value)}
      >
        triggered
      </FilterButton>
      <FilterButton
        name={FILTERS.status}
        value={STATUS.acknowledged}
        props={{ active: isActive(FILTERS.status, STATUS.acknowledged) }}
        onClick={(e) => handleFilter(e.target.name, e.target.value)}
      >
        acknowledged
      </FilterButton>
    </Sidebar>
  );
};
