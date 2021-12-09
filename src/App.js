///////////////////////
//// Build
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

///////////////////////
//// Environmental
import './App.css';
import PageHero from "./components/layout/PageHero/PageHero";

function App() {
  return (
      <Router>
          <PageHero/>

          <Routes>

          </Routes>

      </Router>
  );
}

export default App;
