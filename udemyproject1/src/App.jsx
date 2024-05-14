import { useState } from "react";
import "./App.css";
// import componentImg from "./assets/components.png";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Example.jsx";


function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;
