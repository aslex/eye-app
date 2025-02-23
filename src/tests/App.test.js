import { render, screen } from "@testing-library/react";
import App from "../App";
import { DataContext } from "../DataContext";

test("renders loading text when loading", () => {
  render(
    <DataContext.Provider value={{ loading: true }}>
      <App />
    </DataContext.Provider>
  );
  const text = screen.getByText("data is loading..");
  expect(text).toBeInTheDocument();
});
