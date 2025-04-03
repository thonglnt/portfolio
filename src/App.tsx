import React, { useContext } from "react";
import './reset.css'
import "./index.css";
import Dashboard from "./layouts/dashboard";
import { ThemeProvider, ThemeContext } from "@/contexts/theme";

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
