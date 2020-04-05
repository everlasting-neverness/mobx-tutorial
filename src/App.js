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

const todos = observable([
  {
    text: 'Learn React',
  },
  {
    text: 'Learn MobX',
  },
]);

function App() {
  return (
    <div className="App">
      <Counter store={todos} />
    </div>
  );
}

export default App;

todos.push({ text: 'Learn Redux' });