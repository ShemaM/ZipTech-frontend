import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Header';
import OverviewScreen from './screens/OverviewScreen';

function App() {
  return (
    <Router>
      <header>
        <Nav />
      </header>
      <main className='mt-0'>
        <OverviewScreen />
      </main>
    </Router>
  );
}

export default App;
