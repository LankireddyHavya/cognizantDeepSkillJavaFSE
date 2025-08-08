import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.sayHello();
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  sayHello = () => {
    console.log('Hello! This is a static message.');
  };

  render() {
    return (
      <div>
        <h2>Counter Value: {this.state.count}</h2>
        <button onClick={this.increment}>Increase</button>
        <button onClick={this.decrement}>Decrease</button>
      </div>
    );
  }
}

export default Counter;
