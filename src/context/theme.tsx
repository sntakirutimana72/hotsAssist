import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type Props = { children: React.ReactNode };
type ThemeContextType = { setTheme?: () => void; theme?: boolean | undefined };

const themeContext = createContext<ThemeContextType>({});

export const useTheme = () => useContext(themeContext);

function ThemeProvider({ children }: Props) {
  const [darkMode, setMode] = useState<boolean | undefined>();
  const setTheme = useCallback(() => {
    setMode((state) => !state);
  }, []);

  useEffect(() => {
    if (darkMode === undefined) {
      const systemMode = localStorage.theme === 'dark'
        || (!('theme' in localStorage)
          && window.matchMedia('(prefers-color-scheme: dark)').matches);
      setMode(systemMode);
    } else {
      document.documentElement.classList.toggle('dark', darkMode);
    }
  }, [darkMode]);

  const value = useMemo(
    () => ({ setTheme, theme: darkMode }),
    [darkMode, setTheme],
  );

  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
}

export default ThemeProvider;
