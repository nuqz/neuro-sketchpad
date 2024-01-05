// import React, { useRef, useEffect } from 'react';

import Palette from './components/Pallete';
import Paper from './components/Paper';
import Settings from './components/Settings';

import './App.scss';

function App() {

  return (
    <div className="App">
      <div className="flex h-screen overflow-hidden">
        <Palette />
        <Paper />
        <Settings />
      </div>
    </div>
  );
}

export default App;
