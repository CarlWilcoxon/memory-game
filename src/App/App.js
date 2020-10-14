import React from 'react';
import { Board } from '../Board/Board';
import NewGame from '../NewGame/NewGame';
import './App.css';
const dimensions = {
  rows: 2,
  columns: 3,
};

const CurrentDimensions = React.createContext(dimensions);

function App() {
  return (
    <div className="App">
      <CurrentDimensions.Provider>
        <NewGame />
        <Board />
      </CurrentDimensions.Provider>
    </div>
  );
}

export default App;
