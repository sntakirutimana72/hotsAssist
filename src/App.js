import Header from "./components/Header";
import ActionsPanel from "./components/ActionsPanel";

const App = () => (
  <div className="flex flex-col justify-between gap-8">
    <Header />
    <ActionsPanel />
  </div>
);

export default App;
