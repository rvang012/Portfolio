import React, { Component }from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import resumeData from './resumeData';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header resumeData={ resumeData }/>
        <About resumeData={ resumeData }/>
        <Projects resumeData={ resumeData }/>
        <Contact resumeData={ resumeData }/>
        <Footer resumeData={ resumeData }/>
      </div>
    );
  }
}

export default App;