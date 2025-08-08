import React from 'react';
import Counter from './components/Counter';
import SayWelcome from './components/SayWelcome';
import SyntheticEventExample from './components/SyntheticEventExample';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  return (
    <div className="App">
      <h1>🖱️ React Event Examples App</h1>
      <Counter />
      <SayWelcome />
      <SyntheticEventExample />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
