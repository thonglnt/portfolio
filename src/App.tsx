import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import Dashboard from "@/layouts/dashboard";
import { ThemeProvider, ThemeContext } from "@/contexts/theme";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import "./reset.css";

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
// const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    // <QueryClientProvider client={queryClient}>
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </>
    // </QueryClientProvider>
  );
};

export default App;
