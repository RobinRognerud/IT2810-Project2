import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import PictureOptions from "./components/PictureOptions";

function App() {
  return (
    <div className="App">
      <h1>Gruppe 51</h1>
      <Main />
      <PictureOptions pictureNr={""} />
    </div>
  );
}

export default App;
