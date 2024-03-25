import React from 'react';

import About from './components/About';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';

import './css/App.css';
import './css/Wave.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="waveContainer black"></div>
      <About />
      <div className="waveContainer white"></div>
      <section className="App-content">
        <WorkExperience />
        <Achievements />
        <Projects />
      </section>
      <div className="waveContainer black"></div>
      <Footer />
    </div>
  );
}

export default App;
