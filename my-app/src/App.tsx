import React from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StartPage from "./components/StartPageComp/StartPage";
import { ThemeProvider, useTheme } from "./components/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <StartPage />
        <Header />
        <Main />
        <div className="page-container">
          <DarkmodeButton />
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;

const DarkmodeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div id="darkmodeButton-div">
      <button
        id="darkmodeButton"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      </button>
    </div>
  );
};
