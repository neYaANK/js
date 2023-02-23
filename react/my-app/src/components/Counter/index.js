import React from 'react';
import styles from './Counter.module.css'
import PropTypes from 'prop-types';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    addStep = () => {
        const { step } = this.props
        const val = +step + this.state.counter;
        this.setState({
            counter: val
        })
        alert(new Date().toTimeString())
    }

    render() {
        return (
            <div className={styles.border}>
                <input value={this.state.counter} />
                <button onClick={this.addStep}>add</button>
            </div>
        )
    }

}
Counter.propTypes = {
    counter: PropTypes.number
};

export default Counter;
