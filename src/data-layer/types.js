export const FILTERS = {
  status: "status",
  severity: "severity",
  search: "search",
};

export const STATUS = {
  triggered: "triggered",
  acknowledged: "acknowledged",
};

export const SEVERITY = {
  low: "low",
  high: "high",
};

export const DEFAULT_FILTERS = {
  [FILTERS.status]: [STATUS.triggered, STATUS.acknowledged],
  [FILTERS.severity]: [SEVERITY.low, SEVERITY.high],
  [FILTERS.search]: "",
};
