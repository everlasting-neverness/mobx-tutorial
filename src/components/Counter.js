import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer class Counter extends Component {

    handleIncrement = () => { this.props.store.increment() };
    handleDecrement = () => { this.props.store.decrement() };

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.store.age}</h1>
                <h2>{this.props.store.nickName}</h2>
                <button onClick={this.handleDecrement}>-1</button>
                <button onClick={this.handleIncrement}>+1</button>
                <br/>
                {/* <ul>
                    {this.props.store.map(({ text }) => <li key={text}>{text}</li>)}
                </ul> */}
            </div>
        )
    }
}

export default Counter;