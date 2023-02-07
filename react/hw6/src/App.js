import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import React from 'react';
import StopWatch from './components/StopWatch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: true };
  }

  setVisible = () => {
    this.setState({ isVisible: !this.state.isVisible })
  }

  render() {
    return (
      <>
        {/* <button onClick={this.setVisible}>unmount</button>
        {this.state.isVisible ? <Counter /> : null} */}
        <Counter />
        <StopWatch />
      </>
    );
  }
}

export default App;
