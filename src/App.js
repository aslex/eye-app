import "./App.css";
import { DetectionsDashboard } from "./components/DetectionsDashboard";
import { DataProvider } from "./DataContext";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <header className="App-header"></header>
        <DetectionsDashboard />
      </div>
    </DataProvider>
  );
}

export default App;
