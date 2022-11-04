import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Partners from './components/Partners/Partners';
import WhyAreWe from './components/WhyAreWe/WhyAreWe';
import Workflow from './components/Workflow/Workflow';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Partners />
      <Workflow />
      <WhyAreWe />
    </div>
  );
}

export default App;
