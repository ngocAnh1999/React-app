import React from 'react';
import ReactDOM from 'react-dom';
import { tsPropertySignature } from '@babel/types';

class LoginControl extends React.Component {
    constructor (props) {
        super(props);
        this.state = {isLogin: false};
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLoginClick () {
        this.setState({isLogin: true});
    }
    handleLogoutClick () {
        this.setState({isLogin: false});
    }

    render() {
        const isLogin = this.state.isLogin;
        let button;

        if(isLogin) {
            button = <LogoutButton onClick = {this.handleLogoutClick}/>;
        }
        else {
            button = <LoginButton onClick = {this.handleLoginClick}/>
        }
        return (<div>
            <Greeting isLogin = {isLogin}/>
            {button}
        </div>);
    }
}

function UserGreeting(props) {
    return (<h2>Welcome back!</h2>);
}

function GuestGreeting(props) {
    return (<h2>Please click login button!</h2>);
}

function Greeting(props) {
    if(props.isLogin) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (<button onClick = {props.onClick}>
        Login
    </button>);
}

function LogoutButton(props) {
    return (<button onClick = {props.onClick}>
        Logout
    </button>);
}

export default LoginControl;