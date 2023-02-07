import React, { Component } from 'react';
// import './style.css';
import styles from './Counter.module.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.timerId = null;
  }
  start = () => {
    this.stop();
    this.timerId = setTimeout(this.incrementState, 1000)
  }
  incrementState = () => { this.setState(state => ({ count: state.count + 1 })) }
  reset = () => {
    this.stop();
    this.setState({ count: 0 });
  }
  stop = () => {
    clearTimeout(this.timerId);
    this.timerId = null;
  }
  componentDidMount = () => {
    this.start();
  }
  componentDidUpdate = () => {
    if (this.timerId == null) return
    this.timerId = setTimeout(this.incrementState, 1000)

  }
  componentWillUnmount = () => {
    this.stop();
  }
  render() {
    const { count } = this.state;
    console.log('render');
    return (
      <article className={styles.container}>
        <h2>{count}</h2>
        <button onClick={this.start}>START</button>
        <button onClick={this.reset}>RESET</button>
        <button onClick={this.stop}>STOP</button>
      </article>
    );
  }

}

export default Counter;
