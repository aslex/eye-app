import { fireEvent, render, screen } from "@testing-library/react";
import { FilterBar } from "../components/FilterBar";
import { DataContext } from "../DataContext";
import testData from "./testData.json";
import { DEFAULT_FILTERS } from "../data-layer/types";

test("data is filtered when filter button is clicked", () => {
  const mockSetFilteredData = jest.fn();
  const mockSetActiveFilters = jest.fn();
  render(
    <DataContext.Provider
      value={{
        loading: false,
        data: testData,
        filteredData: testData,
        setData: () => [],
        setFilteredData: mockSetFilteredData,
        activeFilters: DEFAULT_FILTERS,
        setActiveFilters: mockSetActiveFilters,
      }}
    >
      <FilterBar />
    </DataContext.Provider>
  );
  const filterButton = screen.getByTestId("filter-button");
  fireEvent.click(filterButton);
  expect(mockSetFilteredData).toHaveBeenCalled();
  expect(mockSetActiveFilters).toHaveBeenCalled();
});
test("data is filtered when text is entered in search bar", () => {
  const mockSetFilteredData = jest.fn();
  const mockSetActiveFilters = jest.fn();
  render(
    <DataContext.Provider
      value={{
        loading: false,
        data: testData,
        filteredData: testData,
        setData: () => [],
        setFilteredData: mockSetFilteredData,
        activeFilters: DEFAULT_FILTERS,
        setActiveFilters: mockSetActiveFilters,
      }}
    >
      <FilterBar />
    </DataContext.Provider>
  );
  const searchBar = screen.getByTestId("text-search");
  fireEvent.input(searchBar, "office");
  expect(mockSetFilteredData).toHaveBeenCalled();
});
