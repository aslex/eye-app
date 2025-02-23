import { render, screen } from "@testing-library/react";
import { DetectionsDashboard } from "../components/DetectionsDashboard";
import { DataContext } from "../DataContext";
import testData from "./testData.json";
import { DEFAULT_FILTERS, FILTERS, SEVERITY } from "../data-layer/types";
import { SECONDARY_ORANGE } from "../components/constants.styled";

test("renders detection cards", () => {
  render(
    <DataContext.Provider
      value={{
        loading: false,
        data: testData,
        filteredData: testData,
        setData: () => [],
        setFilteredData: () => [],
        activeFilters: DEFAULT_FILTERS,
        setActiveFilters: () => {},
      }}
    >
      <DetectionsDashboard />
    </DataContext.Provider>
  );
  const cards = screen.getAllByTestId("detections-card");
  expect(cards.length).toBe(testData.length);
});

test("renders 'no results' when there are no detections", () => {
  render(
    <DataContext.Provider
      value={{
        loading: false,
        data: testData,
        filteredData: [],
        setData: () => [],
        setFilteredData: () => [],
        activeFilters: DEFAULT_FILTERS,
        setActiveFilters: () => {},
      }}
    >
      <DetectionsDashboard />
    </DataContext.Provider>
  );
  const text = screen.getByText("No results.");
  expect(text).toBeInTheDocument();
});

test("high severity cards are orange", () => {
  render(
    <DataContext.Provider
      value={{
        loading: false,
        data: testData,
        filteredData: [{ ...testData[0], [FILTERS.severity]: SEVERITY.high }],
        setData: () => [],
        setFilteredData: () => [],
        activeFilters: DEFAULT_FILTERS,
        setActiveFilters: () => {},
      }}
    >
      <DetectionsDashboard />
    </DataContext.Provider>
  );
  const card = screen.getByTestId("detections-card");
  const styles = getComputedStyle(card);
  expect(styles.backgroundColor).toBe(SECONDARY_ORANGE);
});
