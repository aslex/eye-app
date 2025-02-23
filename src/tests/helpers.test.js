import {
  updateActiveFilters,
  isActive,
  filterData,
} from "../data-layer/helpers";
import { FILTERS, STATUS, SEVERITY } from "../data-layer/types";
import testData from "./testData.json";

describe("updateActiveFilter", () => {
  let activeFilters;
  beforeEach(() => {
    activeFilters = {
      [FILTERS.status]: [STATUS.acknowledged],
      [FILTERS.severity]: [SEVERITY.high],
    };
  });
  it("adds new status filter to list", () => {
    const attribute = FILTERS.status;
    const value = STATUS.triggered;
    const result = updateActiveFilters({ attribute, value, activeFilters });
    expect(result[FILTERS.status]).toEqual(expect.arrayContaining([value]));
  });
  it("removes status filter to list", () => {
    const attribute = FILTERS.status;
    const value = STATUS.acknowledged;
    const result = updateActiveFilters({ attribute, value, activeFilters });
    expect(result[FILTERS.status]).not.toEqual(expect.arrayContaining([value]));
  });
  it("adds new severity filter to list", () => {
    const attribute = FILTERS.severity;
    const value = SEVERITY.low;
    const result = updateActiveFilters({ attribute, value, activeFilters });
    expect(result[FILTERS.severity]).toEqual(expect.arrayContaining([value]));
  });
  it("removes severity filter to list", () => {
    const attribute = FILTERS.severity;
    const value = SEVERITY.high;
    const result = updateActiveFilters({ attribute, value, activeFilters });
    expect(result[FILTERS.severity]).not.toEqual(
      expect.arrayContaining([value])
    );
  });
});

describe("isActive", () => {
  let activeFilters;
  beforeEach(() => {
    activeFilters = {
      [FILTERS.status]: [STATUS.acknowledged],
      [FILTERS.severity]: [SEVERITY.high],
    };
  });
  it("returns true when filter is active", () => {
    const attribute = FILTERS.status;
    const value = STATUS.acknowledged;
    const result = isActive({ attribute, value, activeFilters });
    expect(result).toBe(true);
  });
  it("returns false when filter is not active", () => {
    const attribute = FILTERS.severity;
    const value = SEVERITY.low;
    const result = isActive({ attribute, value, activeFilters });
    expect(result).toBe(false);
  });
});

describe("filterData", () => {
  let activeFilters;
  beforeEach(() => {
    activeFilters = {
      [FILTERS.status]: [STATUS.triggered],
      [FILTERS.severity]: [SEVERITY.high],
    };
  });
  it("removes irrelevant detections", () => {
    const result = filterData({ data: testData, activeFilters });
    expect(result).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({ [FILTERS.status]: [STATUS.acknowledged] }),
      ])
    );
  });
  it("includes relevant detections", () => {
    const result = filterData({ data: testData, activeFilters });

    result.forEach((r) =>
      expect(r).toEqual(
        expect.objectContaining({
          [FILTERS.status]: activeFilters[FILTERS.status][0],
        })
      )
    );

    result.forEach((r) =>
      expect(r).toEqual(
        expect.objectContaining({
          [FILTERS.severity]: activeFilters[FILTERS.severity][0],
        })
      )
    );
  });
});
