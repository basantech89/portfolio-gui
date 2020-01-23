import React from "react";
import Main from "./containers/Main";
import Toggle from "./components/toggle/Toggle";
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from "./useDarkMode";
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from "./global";
import './App.css';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <Main />
    </ThemeProvider>
  );
}

export default App;
