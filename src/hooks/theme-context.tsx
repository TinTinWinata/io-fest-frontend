import { createContext, useContext, useEffect, useState } from 'react';
import { IChildrenOnly } from '../types/children-only';

type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  setTheme: (bool: boolean) => void;
};

const themeKey = 'CARI_TAHU_THEME_KEY';
const themeContext = createContext({} as ThemeContextType);

export function ThemeProvider({ children }: IChildrenOnly) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setTheme(!isDarkTheme);
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

  useEffect(() => {
    const local = localStorage.getItem(themeKey);
    if (local && local == 'true') setIsDarkTheme(true);
    else if (local && local == 'false') setIsDarkTheme(false);
    else setIsDarkTheme(false);
  }, []);

  const setTheme = (bool: boolean) => {
    console.log('set theme to : ', bool);
    localStorage.setItem(themeKey, bool.toString());
    setIsDarkTheme(bool);
  };

  return (
    <themeContext.Provider value={{ isDarkTheme, toggleTheme, setTheme }}>
      <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
        {children}
      </div>
    </themeContext.Provider>
  );
}

export function useTheme() {
  return useContext(themeContext);
}
