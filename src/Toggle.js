import React from 'react';
import ReactDOM from 'react-dom';
import './Toggle.css'

class Toggle extends React.Component {
    constructor (props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState(
            ({isToggleOn: !this.state.isToggleOn})
        );
    }

    render () {
        return (<button onClick = {this.handleClick} className="toggle-btn">
            {this.state.isToggleOn ? 'ON': 'OFF'}
        </button>);
    }
}
export default Toggle;