import "./App.css";
import { DetectionsDashboard } from "./components/DetectionsDashboard";
import { DataProvider } from "./DataContext";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <header className="App-header">
          <img
            alt="eye security logo"
            src="https://www.eye.security/hubfs/8.%20Website%202023/Logo/Eye%20Logo.svg"
          />
        </header>
        <DetectionsDashboard />
      </div>
    </DataProvider>
  );
}

export default App;
