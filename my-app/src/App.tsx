import React from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StartPage from "./components/StartPageComp/StartPage";

function App() {
  return (
    <div className="App">
      <h1 id="groupNr">Gruppe 51</h1>
      <StartPage />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
