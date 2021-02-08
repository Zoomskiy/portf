import React from "react";
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Contact from "./Contact/Contact";
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Main/>
        <Skills/>
        <Works/>
        <Contact/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
