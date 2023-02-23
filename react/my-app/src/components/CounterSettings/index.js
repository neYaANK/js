import React from 'react';
import Counter from '../Counter';
import styles from './CounterSettings.module.css'
import PropTypes from 'prop-types';

class CounterSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0
        }
    }

    handleChange = (event) => {
        this.setState({
            step: event.target.value
        })
    }
    render() {
        return (
            <>
                <div className={styles.border}>
                    <input onChange={evt => this.handleChange(evt)} value={this.state.step} />
                    <Counter step={this.state.step} />
                </div>
            </>
        )
    }

}
CounterSettings.propTypes = {
    step: PropTypes.number
};
export default CounterSettings;
