import React from 'react';
import Counter from './components/Counter';
import { observable, configure, action } from 'mobx';

configure({ enforceActions: 'observed' });

const nickName = observable(
    {
        firstName: 'John',
        age: 30,
        get nickName() {
            console.log('Generate nick');
            return `${this.firstName}${this.age}`;
        },
        increment() {
            this.age++;
        },
        decrement() {
            this.age--;
        },
    },
    {
        increment: action('Plus one'),
        decrement: action('Minus one'),
    },
    {
      name: 'nickNameObservableObject'
    }
);

// const todos = observable([
//   {
//     text: 'Learn React',
//   },
//   {
//     text: 'Learn MobX',
//   },
// ]);

function App() {
    return (
        <div className='App'>
            <Counter store={nickName} />
        </div>
    );
}

export default App;

// todos.push({ text: 'Learn Redux' });
