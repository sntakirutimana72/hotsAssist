import {
  useState,
  useEffect,
  createContext,
  useCallback,
  useMemo,
  useContext,
} from 'react';

type Props = { children: React.ReactNode }
type ThemeContextType = { setTheme: Function, theme: boolean | undefined }

const themeContext = createContext<ThemeContextType>({ setTheme: () => {}, theme: undefined });

export const useTheme = () => useContext(themeContext);

const ThemeProvider = ({ children }: Props) => {
  const [darkMode, setMode] = useState<boolean|undefined>();

  const setTheme = useCallback(() => {
    setMode((state) => !state);
  }, []);
  
  useEffect(() => {
    if (darkMode === undefined) {
      const systemMode = (
        localStorage.theme === 'dark' || (!('theme' in localStorage) 
        && window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
      setMode(systemMode);
    } else {
      document.documentElement.classList.toggle('dark', darkMode)
    }
  }, [darkMode]);

  const value = useMemo(() => ({ setTheme, theme: darkMode }), [darkMode, setTheme]);

  return (
    <themeContext.Provider value={value}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
