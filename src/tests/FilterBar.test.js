import { fireEvent, render, screen } from "@testing-library/react";
import { FilterBar } from "../components/FilterBar";
import { DataContext } from "../DataContext";
import testData from "./testData.json";

test("data is filtered when filter button is clicked", () => {
  const mockSetFilteredData = jest.fn();
  render(
    <DataContext.Provider
      value={{
        loading: false,
        data: testData,
        filteredData: testData,
        setData: () => [],
        setFilteredData: mockSetFilteredData,
      }}
    >
      <FilterBar />
    </DataContext.Provider>
  );
  const filterButton = screen.getByTestId("filter-button");
  fireEvent.click(filterButton);
  expect(mockSetFilteredData).toHaveBeenCalled();
});
