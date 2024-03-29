import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Root from './root/root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root/>, document.getElementById('root'));

document.title = "Student.io—Future of personal finance for students in Finland";
// For demo:
// <base href="https://codeberry.fi/beta/student.io/">
// <title>Student.io—Future of personal finance for students in Finland</title>

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
