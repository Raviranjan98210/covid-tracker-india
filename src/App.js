import "./App.css";
import InfoCard from "./components/InfoCard";
import StateCasesTable from "./components/StateCasesTable";
import DonutLineCard from "./components/DonutLineCard";

function App() {
  return (
    <div className="App">
      <div class="app__left">
        <DonutLineCard />

        <StateCasesTable />
      </div>
      <div class="app__right">{/* Card for infocard and map */}</div>
    </div>
  );
}

export default App;
