import ThemeProvider from './context/theme';
import Header from './components/Header';
import ActionsPanel from './components/ActionsPanel';

const App = () => (
  <ThemeProvider>
    <div className="flex flex-col gap-2">
      <Header />
      <ActionsPanel />
    </div>
  </ThemeProvider>
);

export default App;
