import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer class Counter extends Component {

    handleIncrement = () => { this.props.store.increment() };
    handleDecrement = () => { this.props.store.decrement() };

    render() {
        return (
            <div>
                <h1>{this.props.store && this.props.store.count}</h1>
                <button onClick={this.handleDecrement}>-1</button>
                <button onClick={this.handleIncrement}>+1</button>
            </div>
        )
    }
}

export default Counter;