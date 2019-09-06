import React from 'react';
import ReactDOM from 'react-dom';
import './Warning.css'

class Warning extends React.Component {
    constructor (props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState({showWarning: !this.state.showWarning});
    }

    render() {
        return (
            <div>
                <h2>Hello, World!!!!</h2>
                <WarningBanner warn = {this.state.showWarning}/>
                <button onClick = {this.handleToggleClick}>{this.state.showWarning ? 'Hide': 'Show Warning'}</button>
            </div>
        );
    }
}

function WarningBanner(props) {
    return (props.warn ? (
    <div className="warning">
        Warning!!!!!!!
    </div> ): null);
}

export default Warning;