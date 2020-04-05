import React from 'react';
import Counter from './components/Counter';
import { observable } from 'mobx';

const nickName = observable({
  firstName: 'John',
  age: 30,

  get nickName() {
    console.log('Generate nick');
    return `${this.firstName}${this.age}`;
  },

  increment() { this.age++ },

  decrement() { this.age-- },

});

function App() {
  return (
    <div className="App">
      <Counter store={nickName} />
    </div>
  );
}

export default App;
