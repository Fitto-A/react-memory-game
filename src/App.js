import React from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Cards from './components/Cards';
import Alert from './components/Alert';
import WinAlert from './components/AlertWin';

import './App.css';


function App() {
  return (
    <div className="App" >
      <Header />
      <Scoreboard />
      <Alert />
      <WinAlert />
      <Cards />
    </div>
  );
}

export default App;
