import React, { Component } from 'react';
// import './style.css';
import styles from './StopWatch.module.css';

class StopWatch extends Component {

  constructor(props) {
    super(props);
    this.state = { time: new Date(0, 0, 0, 0, 0, 0) };
    this.timerId = null;
  }
  incrementTime = () => { this.setState(state => ({ time: new Date(state.time.getTime() + 1000) })) }

  start = () => {
    this.stop();
    this.timerId = setTimeout(this.incrementTime, 1000)

    // this.idInterval = setInterval(
    //   () =>
    //     this.setState(state => ({ time: new Date(state.time.getTime() + 1000) })),
    //   1000
    // )
  }
  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0) });
  }
  stop = () => {
    clearTimeout(this.timerId)
    this.timerId = null
  }
  componentDidMount = () => {
    // this.start();
  }
  componentDidUpdate = () => {
    if (this.timerId == null) return

    this.timerId = setTimeout(this.incrementTime, 1000)

  }
  componentWillUnmount = () => {
    this.stop();
  }
  render() {
    const { time } = this.state;
    return (
      <article className={styles.container}>
        <h2>{time.toLocaleTimeString('it-It')}</h2>
        <button onClick={this.start}>START</button>
        <button onClick={this.reset}>RESET</button>
        <button onClick={this.stop}>STOP</button>
      </article>
    );
  }

}

export default StopWatch;
