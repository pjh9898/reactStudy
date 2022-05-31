import React, { Component } from 'react';

class SimpleHabitClass extends Component {
  state = {
    count : 0,
  };

  handleIncrement = () => {
    this.setState((state) => {
      return {count: state.count + 1}
    })
  }

  componentDidMount() {
    console.log(`mounted!: ${this.state.count}`)
  }

  componentDidUpdate() {
    console.log(`updated!: ${this.state.count}`)
  }

  render() {
    return (
      <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">{this.state.count}</span>
      <button className="habit-button habit-increase" onClick={this.handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
    );
  }
}

export default SimpleHabitClass;