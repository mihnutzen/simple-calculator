import React from 'react';

import './App.scss';

import Calculator from './modules/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://avatars.githubusercontent.com/u/661706?s=200&v=4" alt="Equal Experts" width="100" />
        Equal Experts Calculator
      </header>
      <main>
        <Calculator />
      </main>
    </div>
  );
}

export default App;
