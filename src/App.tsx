import React from 'react';
import Clients from './components/Clients/Clients';
import Conditions from './components/Conditions/Conditions';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Partners from './components/Partners/Partners';
import Raffle from './components/Raffle/Raffle';
import Reviews from './components/Reviews/Reviews';
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
      <Raffle />
      <Reviews />
      <Clients />
      <Conditions />
    </div>
  );
}

export default App;
