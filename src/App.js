import React from 'react';
import Counter from './components/Counter';
import { observable } from 'mobx';

const counterState = observable({
    count: 0,
});

counterState.increment = function() { this.count++ };
counterState.decrement = function() { this.count-- };

function App() {
  return (
    <div className="App">
      <Counter store={counterState} />
    </div>
  );
}

export default App;
