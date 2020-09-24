import React from "react";
import "./App.css";
import "./StartPage.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider, useTheme } from "./components/ThemeContext";

const helloRef = React.createRef<HTMLDivElement>();

const scroll = () => {
  if (helloRef && helloRef.current) {
    helloRef.current.scrollIntoView();
  }
};

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <div className="startPage">
          <h1 className="welcome-text">Welcome to our gallery</h1>
          {/* https://codepen.io/postor/pen/mskxI */}
          <div className="arrow-div">
            {" "}
            <svg className="arrows">
              <g onClick={scroll}>
                <path className="a1" d="M0 0 L30 32 L60 0"></path>
                <path className="a2" d="M0 20 L30 52 L60 20"></path>
                <path className="a3" d="M0 40 L30 72 L60 40"></path>
              </g>
            </svg>
          </div>
        </div>
        <Header />
        <div ref={helloRef}>
          <Main />
        </div>
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
