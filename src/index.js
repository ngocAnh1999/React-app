import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import Toggle from './Toggle';
// import LoginControl from './LoginControl';
// import Warning from './Warning';
// import Clock from './Clock';
import NumberList from './NumberList';
import Blog from './NumberList';

const numbers = [1, 2, 3, 4, 5];

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

ReactDOM.render(
        <Blog posts = {posts} />,
        document.getElementById('root')
);

// setInterval(tick, 1000);

// ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();
