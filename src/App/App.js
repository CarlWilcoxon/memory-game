import React from 'react';
import { Board } from '../Board/Board';
import NewGame from '../NewGame/NewGame';
// import logo from '../logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <NewGame />
      <Board />
    </div>
  );
}

export default App;
